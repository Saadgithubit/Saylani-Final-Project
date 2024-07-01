import { useSelector } from 'react-redux'
import { Box,Card, CardMedia,CardContent, Typography } from '@mui/material'
import HdrAutoRoundedIcon from '@mui/icons-material/HdrAutoRounded';
export default function Assingment(){
    const drawerWidth = useSelector(state => state.widthReducer.width)
    return (
        <>
          <Box
            component="main"
            sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, }}
          >
              <Box>
        <Card>
          <CardMedia
            component="img"
            height="220"
            image="https://gstatic.com/classroom/themes/img_reachout.jpg"
            alt="Descriptive Alt Text"
          />
           <CardContent
            sx={{
              position: 'absolute',
              bottom:{xs:300,sm:380} ,
              left: 16,
              color: 'white',
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
              // padding: '8px 16px',
              // borderRadius: '8px',
            }}
          >
            <Typography sx={{
              fontSize:{sm:45}
            }} variant="h5">
            SMIT-10 (Sir Kashif)
            </Typography>
            <Typography sx={{
              fontSize:{sm:30,xs:18}
            }} variant="h5">
            MWF 11 AM - 1 PM
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{mt:2}}>
        <Card sx={{border: 1, borderColor: 'grey.500'}}>
          <CardContent>
            <Typography>
              <HdrAutoRoundedIcon sx={{fontSize:"50px",position:'relative',top:15}} />
            </Typography>
            <Typography sx={{ml:8,position:'relative',top:-25}} variant="span">
            Announce something to your class
            </Typography>
          </CardContent>
        </Card>
      </Box>
          </Box>
        </>
      )
}