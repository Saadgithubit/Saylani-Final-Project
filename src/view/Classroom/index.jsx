import { useSelector } from 'react-redux'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import TabsComponent from '../../Components/TabsComponent';
import StudentClassWork from '../../Components/StudentClassWork';
import Assignment from '../../Components/Assignment';
export default function Classroom() {
  const tabs = [
    { label: 'Class Work', content: <StudentClassWork />, textColor: '#007B83' },
    { label: 'Assignments', content: <Assignment />, textColor: '#007B83' },
  ]
  return (
    <>
      <Box>
        <TabsComponent tabs={tabs} />
        {/* <Card>
          <div className='bg-[url("https://gstatic.com/classroom/themes/img_reachout.jpg")] bg-center bg-cover px-8 lg:py-24 py-16 text-white'>
            <Typography sx={{
              fontSize: { sm: 45 }
            }} variant="h5">
              SMIT-10 (Sir Kashif)
            </Typography>
            <Typography sx={{
              fontSize: { sm: 30, xs: 18 }
            }} variant="h5">
              MWF 11 AM - 1 PM
            </Typography>
          </div>
        </Card>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Card sx={{ border: 1, borderColor: 'grey.500' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '10px', my: 2 }}>
            <HdrAutoRoundedIcon />
            <Typography variant="span">
              Announce something to your class
            </Typography>
          </CardContent>
        </Card> */}
      </Box>
    </>
  )
}