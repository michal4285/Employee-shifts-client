
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

export default function AlignItemsList() {
  const [lists, setlists] = useState([,])

  useEffect(() => {
    fetch(`${API.LOGIN_URL}employee/GetAll`, {
      method: 'GET',
      // body: JSON.stringify({})
    })
      .then(res => res.json()).then(data => {
        if (data.Data != null) {
          setlists(data.Data)
        }
        else alert("אין עובדים במערכת")
      }
      ).catch(err => console.log(err.message))
  })
  return (
    <List sx={{margin:"35%", marginTop: '100px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <img style={{ height: '100px', width: '100px', marginRight: '90%'}} src={image} />
      {lists.map((item, index) => (<div key={index}>
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
                  <p dir="rtl" style={{marginRight:'5%'}}>{item.employeeEmail}</p>
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
  );
}

