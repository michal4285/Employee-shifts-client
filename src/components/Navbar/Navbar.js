import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setexit } from '../../redux/actions/settings';
import image from './2.jpg';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

function mapStateToProps(state) {
    return {
        settings: state.settings,
        employee:state.user,
        setting:state.settings
    };
}
function CenteredTabs(props) {

    let navigate = useNavigate();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let { settings,employee,setting} = props;
   
     

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const nevigatelogin = () => {
         
        props.dispatch(setexit(true))
        let x = settings.exit
         
        navigate('/Login')
        window.location.href = '/Login'
      
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
                        
                        <Tab label="לוח משמרות" onClick={() => navigate('/Schedule')} />
                         <Tab label="פרטים אישיים" onClick={() => navigate('/Details')} />
                        {employee.id >1 &&<Tab label="עריכת משמרות" onClick={() => navigate('/ScheduleEmployee')} />}
                        {employee.id === 1 &&<Tab label="רשימת עובדים" onClick={() => navigate('/EmployeesList')} />}
                        {employee.id === 1 &&<Tab label="עובד חדש" onClick={() => navigate('/Register')} />}
                        {/* <Tab label="הודעות" onClick={() => navigate('/BoxChat')} /> */}
                        {employee.id === 1 &&<Tab label="הגדרות מערכת" onClick={() => navigate('/Setting')} />}
                        <Tab label="יציאה" onClick={() => { nevigatelogin() }} />
                        <img style={{height:'50px',width:'5%'}} src={image} />
                    </Tabs>
                </Paper>
            }
        </div>
    );
}
export default connect(mapStateToProps)(CenteredTabs)
