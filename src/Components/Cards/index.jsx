import * as React from 'react';
import { IconButton, Card, CardActions, CardContent, CardMedia, Typography, Button, Box, } from '@mui/material';
import { FolderOutlined as FolderOutlinedIcon, PermContactCalendarOutlined as PermContactCalendarOutlinedIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function CardData(props) {
  const page = props.goto
  const navigate = useNavigate()
  return (
    <Box sx={{ width: '100%', Py: 6, background: '#0976A9', color: 'white', borderRadius: '20px' }}>
      <Typography sx={{ paddingLeft: '30px' }} gutterBottom variant="h5" component="div">
      </Typography>
      <Typography onClick={() => navigate(page)} sx={{ padding: '30px', cursor: 'pointer' }}>
        <h1 className='text-3xl border-b-2 font-semibold pb-2'>Web & Mobile Application Development</h1>
        <p className='text-2xl border-b-2 mt-2 font-semibold inline-block w-max mb-2'>SMIT-10 (Sir Kashif)</p>
        <p className='w-max text-[#5d8f25]'>MWF 11Am - 1 Pm</p>
        <h1 className='mt-2'>Enrolled</h1>
        <Button
          variant='contained'
          sx={{ background: '#8BC34A', py: 2, px: 4, mt: 2, borderRadius: '30px', ":hover": { background: '#4CAF50' } }}>
          See Activity</Button>
      </Typography>
      <CardMedia
        sx={{ height: 'auto' }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent className='cursor-pointer' onClick={() => navigate(page)}>
      </CardContent>
    </Box>
  );
}
