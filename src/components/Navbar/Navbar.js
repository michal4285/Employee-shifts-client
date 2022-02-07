import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setexit } from '../../redux/actions/settings';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function mapStateToProps(state) {
    return {
        settings: state.settings
    };
}
function CenteredTabs(props) {

    let navigate = useNavigate();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let { settings } = props;
    debugger;


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nevigatelogin = () => {
        debugger
        props.dispatch(setexit(true))
        let x = settings.exit
        debugger
        navigate('/Login')
    };

    return (
        <div>
            {!settings.exit &&
                <Paper className={classes.root} style={{ direction: 'rtl' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="לוח עובדים" onClick={() => navigate('/ScheduleManager')} />
                        {/* <Tab label="יציאה" onClick={() => window.location.replace('http://localhost:3000/Login')} /> */}
                        <Tab label="פרטים אישיים" onClick={() => navigate('/Details')} />
                        <Tab label="רשימת עובדים" onClick={() => navigate('/EmployeesList')} />
                        <Tab label="עובד חדש" onClick={() => navigate('/Register')} />
                        <Tab label="הודעות" onClick={() => navigate('/BoxChat')} />
                        <Tab label="הגדרות מערכת" onClick={() => navigate('/Setting')} />
                        <Tab label="יציאה" onClick={() => { nevigatelogin() }} />
                    </Tabs>
                </Paper>
            }
        </div>
    );
}
export default connect(mapStateToProps)(CenteredTabs)
