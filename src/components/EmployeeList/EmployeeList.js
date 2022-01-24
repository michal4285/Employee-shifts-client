
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import API from '../../config/env/local'

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


    <List sx={{ marginTop: '100px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {lists.map((item, index) => (<div key={index}>
        <ListItem alignItems="flex-start" >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp">{item.employeeFirstName.charAt(0).toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText sx={{ textAlign: "center" }}
            primary={`${item.employeeFirstName} ${item.employeeLastName}`}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {item.employeeEmail}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" /></div>))}
    </List>
  );
}

