import { useSelector } from 'react-redux'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import HdrAutoRoundedIcon from '@mui/icons-material/HdrAutoRounded';
export default function Assignment() {
  const drawerWidth = useSelector(state => state.widthReducer.width)
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, }}
      >
        <Box>
          <Card>
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
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '10px',my:2 }}>
              <HdrAutoRoundedIcon />
              <Typography variant="span">
                Announce something to your class
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  )
}