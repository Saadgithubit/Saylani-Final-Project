
import BasicDateCalendar from '../Calender/Calender'
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { useSelector } from 'react-redux';

import './Rightdrawer.css'
import { Drawer } from '@mui/material';

const Rightdrawer = () => {
    const drawerWidth = useSelector(state => state.widthReducer.width)
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                background: '#FBFBFB',
                display: { xs: 'none', sm: 'none', md: 'block' },
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="right"
        >
            <div className="main-container bg-[#FBFBFB]">
                <div>
                    <h1 className='heading'>Your Today Task</h1>
                </div>
                <div className='sub-container'>
                    <div className='flex justify-center'>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><MdOutlineAssignmentTurnedIn /><h3>Quiz  Assignment</h3></span>
                        <span>  6:00PM</span>
                    </div>
                </div>
                {/* <div className='sub-container'>
                    
                </div> */}
                <div className='btn'><button>+Create New</button></div>
                <div className='img-container'>
                    <img src='https://img.freepik.com/premium-photo/funny-illustration-3d-cartoon-backpacker_183364-72608.jpg?ga=GA1.1.437055642.1699790829&semt=ais_user' />
                </div>
            </div>
            <div className='border-t-2 h-auto pb-0'><BasicDateCalendar /></div>
        </Drawer>
    )
}

export default Rightdrawer
