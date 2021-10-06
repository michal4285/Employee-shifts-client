import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('history:::', history)
    };

    return (
        <Paper className={classes.root} style={{ direction: 'rtl' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {/* <Tab label="יציאה" onClick={() => history.push('/Login')} /> */}
                <Tab label="יציאה" onClick={() => window.location.replace('http://localhost:3000/Login')} />
                <Tab label="פרטים אישיים" onClick={() => window.location.replace('http://localhost:3000/Details')} />
                <Tab label="לוח עובדים" onClick={() => window.location.replace('http://localhost:3000/ScheduleManager')} />
                <Tab label="רשימת עובדים" onClick={() => window.location.replace('http://localhost:3000/EmployeesList')} />
                <Tab label="עובד חדש" onClick={() => window.location.replace('http://localhost:3000/Register')} />
                <Tab label="הודעות" onClick={() => window.location.replace('http://localhost:3000/BoxChat')} />
                <Tab label="הגדרות מערכת" onClick={() => window.location.replace('http://localhost:3000/Setting')} />
            </Tabs>
        </Paper>
    );
}
