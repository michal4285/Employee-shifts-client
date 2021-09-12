import React, { useEffect, useState } from 'react';
import './Details.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function mapStateToProps(state) {
    return {
        employee: state.user
    };
}


function Details(props) {
    const { employee } = props
    const classes = useStyles()
    const [firstName, setFirstName] = useState('Yael')
    const [lastName, setLastName] = useState()
    const [address, setAddress] = useState()
    const [tel, setTel] = useState()
    const [email, setEmail] = useState()
    const [originalPassword, setOriginalPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    useEffect(() => {
        // alert(employee.firstname)
    }, [])

    return (
        <div className="main mt-5">
            <form className={classes.root} noValidate autoComplete="off" >
                {/* <TextField id="standard-basic" label="Standard" /> */}
                {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <div className="ml-5">עריכת פרטים אישיים</div>
                <TextField onChange={(e) => setFirstName(e.target.value)} defaultValue={employee.firstname} id="outlined-basic" label="שם פרטי" variant="outlined" className='textField ml-5' />
                <br />
                <TextField  value={employee.lastName} id="outlined-basic" label="שם משפחה" variant="outlined" className='textField ml-5' />
                <br />
                <TextField defaultValue={employee.address} id="outlined-basic" label="כתובת" variant="outlined" className='textField ml-5' />
                <br />
                <TextField defaultValue={employee.phone} id="outlined-basic" label="טלפון" variant="outlined" className='textField ml-5' />
                <br />
                <TextField defaultValue={employee.email} id="outlined-basic" label="אימייל" variant="outlined" className='textField ml-5' />
                <br />
                <TextField id="outlined-basic" label="סיסמתך המקורית" variant="outlined" className='textField ml-5' />
                <br />
                <TextField id="outlined-basic" label="סיסמא חדשה" variant="outlined" className=' ml-5' />
                <TextField id="outlined-basic" label="אימות סיסמא" variant="outlined" className=' ml-1' />
                <br />
                <Button variant="contained" color="primary">
                    אישור
                </Button>
            </form>
        </div>
    );
}
export default connect(mapStateToProps)(Details)
