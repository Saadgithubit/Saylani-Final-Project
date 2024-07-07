import * as React from 'react';
import { IconButton, Card, CardActions, CardContent, CardMedia, Typography, Button, Box, } from '@mui/material';
import { FolderOutlined as FolderOutlinedIcon, PermContactCalendarOutlined as PermContactCalendarOutlinedIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function CardData(props) {
  const page = props.goto
  const navigate = useNavigate()
  return (
    <Box sx={{ width: '100%', Py: 6, background: '#FBFBFB', borderRadius: '20px' }}>
      <Typography sx={{ paddingLeft: '30px' }} gutterBottom variant="h5" component="div">
      </Typography>
      <Typography onClick={() => navigate(page)} sx={{ padding: '30px', cursor: 'pointer' }}>
        <h1 className='text-3xl font-bold pb-4'>Web & Mobile Application Development</h1>
        <p className='text-2xl font-semibold inline-block w-max mb-2'>SMIT-10 (Sir Kashif)</p>
        <p className='w-max text-[#8BC34A]'>MWF 11Am - 1 Pm</p>
        <h1 className='hover:text-[#0B73B7] mt-2'>Enrolled</h1>
        <Button
          variant='contained'
          sx={{ background: '#8BC34A', py: 2, px: 4, mt: 2, ":hover": { background: '#4CAF50' } }}>
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
