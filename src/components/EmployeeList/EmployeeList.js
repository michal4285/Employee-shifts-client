
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
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



function AlignItemsList(props) {
  const [lists, setlists] = useState([,])
  const [open, setOpen] = useState(false);
  const [clickUserId, seclickUserId] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  

  useEffect(() => {
    fetch(`${API.LOGIN_URL}employee/GetAll`, {
      method: 'GET',
      // body: JSON.stringify({})
    }).then(res => res.json()).then(data => {
         debugger;
         if (data.Data != null) 
          setlists(data.Data)
         else alert("אין עובדים במערכת")
      }
      ).catch(err => console.log(err.message))
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
    <List sx={{margin:"35%", marginTop: '100px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <img style={{ height: '100px', width: '100px', marginRight: '90%'}} src={image} />
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
        <DialogTitle id="responsive-dialog-title" style={{backgroundColor:"lightblue",color:"blue"}}>
      {lists[clickUserId].employeeFirstName} {lists[clickUserId].employeeLastName}
        </DialogTitle>
        <DialogContent style={{backgroundColor:"lightblue"}}>
          <DialogContentText style={{color:"blue"}}> 
      {lists[clickUserId].employeePhone}
          </DialogContentText>
          <DialogContentText style={{color:"blue"}}> 
      {lists[clickUserId].employeeAddress}
          </DialogContentText>
          <DialogContentText style={{color:"blue"}}> 
       {lists[clickUserId].employeeEmail} 
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor:"lightblue"}}>
          <Button onClick={handleCloseEmployee} autoFocus style={{backgroundColor:"blue",color:"lightblue"}}>
            סגירה
          </Button>
        </DialogActions>
      </Dialog>}
      </>
  );
}export default AlignItemsList;

