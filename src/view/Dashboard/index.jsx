import { useState } from 'react'
import AppBarSection from '../../Components/AppBar'
import MediaCard from '../../Components/Cards'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'

export default function Dashboard() {
  const drawerWidth = useSelector(state => state.widthReducer.width)
  console.log(drawerWidth);
  return (
    <>
      <AppBarSection />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, }}
      >
        <p className='text-3xl text-center my-4'>Courses</p>
        <div className='flex justify-between flex-wrap p-2 border-2'>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </Box>
    </>
  )
}