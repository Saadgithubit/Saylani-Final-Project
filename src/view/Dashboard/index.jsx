import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import Card from '../../Components/Cards'
import CardData from '../../Components/Cards'

export default function Dashboard() {
  const drawerWidth = useSelector(state => state.widthReducer.width)
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, }}
      >
        <CardData />
      </Box>
    </>
  )
}