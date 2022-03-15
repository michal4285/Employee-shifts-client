
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import API from '../../config/env/local';
import image from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import image5 from './5.jpg';
import image6 from './6.jpg';
import image7 from './7.jpg';

function AlignItemsList(props) {
  const [lists, setlists] = useState([,])
  const [open, setOpen] = useState(false);
  const [alert,setalert]=useState(false)
  const [clickUserId, seclickUserId] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  

  useEffect(() => {
    setalert(false)
    fetch(`${API.LOGIN_URL}employee/GetAll`, {
      method: 'GET',
    }).then(res => res.json()).then(data => {
         debugger;
         if (data.Data != null) 
          setlists(data.Data)
         else setalert(true)
      }      
      ).catch(err =>setalert(true))
  },[])


 const handleClickOpenEmployee = (id) => {
    seclickUserId(id)
    setOpen(true);
  }

  const handleCloseEmployee = () => {
    setOpen(false);
  };

  return (
  <>
   {alert===true&&<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" dir="rtl">אין עובדים במערכת</Alert>
    </Stack>}
  <img style={{ height: '3000px', width: '300px',float:'right',marginTop:'0' }} src={image3} />
  <img style={{ height: '3000px', width: '300px',float:'left',marginTop:'0' }} src={image4} />
    <List sx={{margin:"35%", marginTop: '100px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <img style={{ height: '100px', width: '100px',marginLeft:'50%'}} src={image} />
      {lists.map((item, index) => (<div  style={{cursor:'pointer'}} id='userInList' key={index}  onClick={()=>handleClickOpenEmployee(index)}>
        <ListItem alignItems="flex-start" style={{width:"100%",heght:"100%"}}>
          <ListItemText sx={{ textAlign: "center" }}
            // primary={`${item.employeeFirstName} ${item.employeeLastName}`}
            primary={
            <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="h8"
                  color="text.primary"
                  align='right'
                >
                  <p style={{marginRight:'5%'}} dir="rtl">{item.employeeFirstName}  {item.employeeLastName}</p>
                </Typography>
              </React.Fragment>
              }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  align='right'
                >
                  <p dir="rtl"  id='email' style={{marginRight:'5%'}}>{item.employeeEmail}</p>
                </Typography>
              </React.Fragment>
            }
          />   
           <ListItemAvatar>
            <Avatar alt="Remy Sharp">{item.employeeFirstName.charAt(0).toUpperCase()}</Avatar>
          </ListItemAvatar>
        </ListItem>
        <Divider variant="inset" component="li"/></div>))}
    </List>
  {open &&<Dialog 
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseEmployee}
        aria-labelledby="responsive-dialog-title"
        align='right'
      >
        <img style={{height:'100px',width:'400px'}} src={image7} />
        {/* <div  style={{backgroundImage:`url(${image5})` ,backgroundSize:'500px' }}> */}
        <DialogTitle id="responsive-dialog-title"  style={{backgroundSize:"10% 10%",color:"blue"} } >
      {lists[clickUserId].employeeFirstName} {lists[clickUserId].employeeLastName}
        </DialogTitle>
        <DialogContent >
          <DialogContentText style={{color:"rgb(182, 77, 112)"}}> 
      {lists[clickUserId].employeePhone}
          </DialogContentText>
          <DialogContentText style={{color:"rgb(182, 77, 112)"}}> 
      {lists[clickUserId].employeeAddress}
          </DialogContentText>
          <DialogContentText style={{color:"rgb(182, 77, 112)"}}> 
       {lists[clickUserId].employeeEmail} 
          </DialogContentText>
        </DialogContent>
        <DialogActions  >
          <Button onClick={handleCloseEmployee} autoFocus style={{backgroundColor:"rgb(182, 77, 112)",color:"lightblue",margin:'15px'}}>
            סגירה
          </Button>
        </DialogActions>
        <img style={{height:'100px',width:'400px'}} src={image6} />
        {/* </div> */}
      </Dialog>}
      </>
  );
}export default AlignItemsList;

