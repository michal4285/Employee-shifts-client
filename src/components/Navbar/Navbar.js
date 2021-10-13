import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let { history } = props;

    history = createBrowserHistory({ forceRefresh: true })
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
                <Tab label="יציאה" onClick={() => history.push('/Login')} />
                {/* <Tab label="יציאה" onClick={() => window.location.replace('http://localhost:3000/Login')} /> */}
                <Tab label="פרטים אישיים" onClick={() => history.push('/Details')} />
                <Tab label="לוח עובדים" onClick={() => history.push('/ScheduleManager')} />
                <Tab label="רשימת עובדים" onClick={() => history.push('/EmployeesList')} />
                <Tab label="עובד חדש" onClick={() => history.push('/Register')} />
                <Tab label="הודעות" onClick={() => history.push('/BoxChat')} />
                <Tab label="הגדרות מערכת" onClick={() => history.push('/Setting')} />
            </Tabs>
        </Paper>
    );
}
