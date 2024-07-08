
import BasicDateCalendar from '../../Components/Calender/Calender'
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
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="right"
        >
            <div className="main-container">
                <div><BasicDateCalendar /></div>
                <div>
                    <h1 className='heading'>Your Today Task</h1>
                </div>
                <div className='sub-container'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><MdOutlineAssignmentTurnedIn /><h3>Upload Assignment</h3></div>
                    <div>3:00PM</div>
                </div>
                <div className='sub-container'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><MdOutlineAssignmentTurnedIn /><h3>Quiz  Assignment</h3></div>
                    <div>  6:00PM</div>
                </div>
                <div className='btn'><button>+Create New</button></div>
                <div className='img-container'>
                    <img src='https://img.freepik.com/premium-photo/funny-illustration-3d-cartoon-backpacker_183364-72608.jpg?ga=GA1.1.437055642.1699790829&semt=ais_user' />
                </div>
            </div>
        </Drawer>
    )
}

export default Rightdrawer
