import React, {Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import {Locations} from "./Locations";
import axios from "axios";

class Scheduler extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timeHeaders: [{groupBy: "Month"}, {groupBy: "Day", format: "dddd M/d/yyyy"}, {groupBy: "Cell"}],
      startDate: "2021-07-01",
      days: 31,
      businessBeginsHour: 8,
      businessEndsHour: 16,
      scale: "Manual",
      timeline: this.createTimeline(),
      cellWidth: 130,
      eventHeight: 40,
      headerHeight: 30,
      treeEnabled: true,
      allowEventOverlap: false,
      multiMoveVerticalMode: "Master",
      eventResizeHandling: "Disabled",
      rowHeaderColumns: [
        {name: "Name", display: "name"},
        {name: "Total"}
      ],
      linkBottomMargin: 20,
      onBeforeTimeHeaderRender: args => {
        if (args.header.level === 2) {
          args.header.text = args.header.start.toString("h") + args.header.start.toString("tt").substring(0, 1).toLowerCase();
        }
      },
      onTimeRangeSelected: async args => {
        const dp = this.scheduler;

        const row = dp.rows.find(args.resource);
        if (row.index === 0) {
          await DayPilot.Modal.alert("No assignment for this shift.<br><br>Click below to create a new assignment.");
          dp.clearSelection();
          return;
        }

        const modal = await DayPilot.Modal.confirm("Create a new assignment?");
        dp.clearSelection();
        if (modal.canceled) {
          return;
        }
        const locationId = this.locations.selectedValue;

        const {data} = await axios.post("/api/shift_create.php", {
          start: args.start,
          end: args.end,
          location: locationId,
          person: args.resource
        });

        const id = data.id;

        dp.events.add({
          start: args.start,
          end: args.end,
          id: id,
          resource: args.resource,
          location: locationId,
          person: args.resource,
          join: id
        });

        dp.events.add({
          start: args.start,
          end: args.end,
          id: "L" + id,
          resource: "L" + locationId,
          location: locationId,
          person: args.resource,
          type: "location",
          join: id
        });

        dp.links.add({
          id:  "L" + id,
          from: "L" + id,
          to: id,
          type: "FinishToFinish",
          layer: "Above",
          color: "#e69138"
        });
      },
      onBeforeCellRender: args => {
        if (args.cell.y === 0) {
          args.cell.backColor = "#fff2cc";
        }
      },
      onBeforeRowHeaderRender: args => {
        const duration = args.row.events.totalDuration();
        const columnTotal = args.row.columns[1];
        if (duration.totalHours() > 0 && columnTotal) {
          columnTotal.text = duration.totalHours() + "h";
        }
        if (args.row.data.type === "location") {
          args.row.backColor = "#ffe599";
          args.row.fontColor = "#000";
          if (columnTotal) {
            columnTotal.fontColor = "#000";
          }
        }
      },
      onEventMove: async args => {
        const dp = this.scheduler;
        const e = args.e;
        if (e.data.type === "location") {
          const {data} = await axios.post("/api/shift_update_time.php", {
            id: e.data.join,
            start: args.newStart,
            end: args.newEnd
          });

          dp.message(data.message);
        } else {
          const {data} = await axios.post("/api/shift_update_person.php", {
            id: e.data.join,
            person: args.newResource
          });

          dp.message(data.message);

          const locationAssignment = dp.events.find("L" + e.data.join);
          locationAssignment.data.person = args.newResource;
          dp.events.update(locationAssignment);
        }
      },
      onTimeRangeSelecting: args => {
        if (args.duration.totalHours() > 8) {
          args.allowed = false;
          args.right.enabled = true;
          args.right.text = "Max duration is 8 hours";
        }
      },
      onBeforeGridLineRender: args => {
        if (args.row && args.row.id.startsWith("L")) {
          args.color = "#aaa";
        }
      },
      onBeforeEventRender: args => {
        const dp = this.scheduler;

        const isLocation = args.data.type === "location";
        const inactive = args.data.type === "inactive";

        if (isLocation) {
          const person = dp.rows.find(args.data.person);

          // args.data.backColor = "#bfd9a9";
          args.data.fontColor = "#fff";
          args.data.backColor = "#3d85c6";
          args.data.borderColor = "darker";
          args.data.barHidden = true;
          args.data.text = person.name;
          args.data.moveVDisabled = true;

          args.data.areas = [
            {
              right: 5,
              top: 8,
              height: 22,
              width: 22,
              cssClass: "scheduler_default_event_delete",
              style: "background-color: #fff; border: 1px solid #ccc; box-sizing: border-box; border-radius: 10px; padding: 0px; border: 1px solid #999",
              visibility: "Visible",
              onClick: async args => {

                const modal = await DayPilot.Modal.confirm("Delete this assignment?");

                if (modal.canceled) {
                  return;
                }
                const locationAssignment = args.source;

                const locationAssignmentId = locationAssignment.data.id;
                const personAssignmentId = locationAssignment.data.join;

                await axios.post("/api/shift_delete.php", {id: personAssignmentId});

                dp.events.remove(locationAssignmentId);
                dp.events.remove(personAssignmentId);
                dp.links.remove(locationAssignmentId);
              }
            }
          ];
        } else {
          const location = this.locations.find(args.data.location);
          if (location) {
            args.data.text = location.name;
            args.data.moveHDisabled = true;
          }
          if (inactive) {
            args.data.backColor = "#eee";
            args.data.fontColor = "#666";
            args.data.barHidden = true;
            args.data.moveDisabled = true;
            args.data.resizeDisabled = true;
          } else {
            args.data.fontColor = "#fff";
            args.data.backColor = "#6fa8dc";
            args.data.borderColor = "darker";
            args.data.barHidden = true;
          }
        }

      }
    };
  }

  componentDidMount() {
    this.loadLocations();
  }

  createTimeline() {
    const days = DayPilot.Date.today().daysInMonth();
    const start = DayPilot.Date.today().firstDayOfMonth();

    const result = [];
    for (let i = 0; i < days; i++) {
      const day = start.addDays(i);
      result.push({
        start: day.addHours(0),
        end: day.addHours(8)
      });
      result.push({
        start: day.addHours(8),
        end: day.addHours(16)
      });
      result.push({
        start: day.addHours(16),
        end: day.addHours(24)
      });
    }
    return result;
  }

  async loadData(location) {
    const dp = this.scheduler;

    const start = dp.visibleStart();
    const end = dp.visibleEnd();
    const promisePeople = axios.get(`/api/shift_people.php`);
    const promiseAssignments = axios.get(`/api/shift_assignments.php?location=${location.id}&start=${start}&end=${end}`);
    const [{data: people}, {data: assignments}] = await Promise.all([promisePeople, promiseAssignments]);

    const rows = [
      {id: "L" + location.id, name: location.name, type: "location"},
      ...people
    ];

    const links = [];
    assignments.filter(e => e.type === "location").forEach(e => {
      links.push({
        id: e.id,
        from: e.id,
        to: e.join,
        type: "FinishToFinish",
        layer: "Above",
        color: "#e69138"
      });
    });

    dp.update({
      resources: rows,
      events: assignments,
      links
    });

  }

  async loadLocations() {
    const {data} = await axios.get("/api/shift_locations.php");
    this.locations.load(data);
  }

  render() {
    const {...config} = this.state;
    return (
      <div>
        <Locations onChange={args => this.loadData(args.location)} ref={component => this.locations = component}></Locations>
        <DayPilotScheduler
          {...config}
          ref={component => this.scheduler = component && component.control}
        />
      </div>
    );
  }
}

export default Scheduler;