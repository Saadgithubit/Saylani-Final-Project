import * as React from 'react';
import { IconButton, Card, CardActions, CardContent, CardMedia, Typography, } from '@mui/material';
import {FolderOutlined as FolderOutlinedIcon, PermContactCalendarOutlined as PermContactCalendarOutlinedIcon} from '@mui/icons-material';
export default function CardData() {
  return (
    <Card sx={{ maxWidth: 320, Py: 4 }}>
      <Typography sx={{background: '#0B73B7',color: 'white',padding: '30px'}}>
          <a className='text-2xl cursor-pointer font-semibold inline-block w-max mb-2 hover:underline'>SMIT-10 (Sir Kashif)</a>
          <a className='w-max cursor-pointer hover:underline'>MWF 11Am - 1 Pm</a>
        </Typography>
      <CardMedia
        sx={{ height: 'auto' }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wep & Mobile Application Development
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h1>Enrolled</h1>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
      <div className='flex justify-end pr-4 py-2 border-t-2'>
      <IconButton color="inherit">
        <PermContactCalendarOutlinedIcon/>
      </IconButton>
      <IconButton color="inherit">
        <FolderOutlinedIcon/>
      </IconButton>
      </div>
    </Card>
  );
}
