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
  useEffect(() => {
    fetch(`${API.LOGIN_URL}employee/GetAll`, {
      method: 'GET',
      // body: JSON.stringify({})
    })
      .then(res => res.json()).then(data => {
        if (data.Data != null) {
          console.log(data.Data)
        }
        else alert("אין עובדים במערכת")
      }
      ).catch(err => console.log(err.message))
  })
  return (
    <List sx={{ marginTop:'100px', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Richal Prober"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               michalprober@gmail.com
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

