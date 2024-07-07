import { Button } from '@mui/material'
import CardData from '../../Components/Cards'
import CoursesTable from '../../Components/coursesTable'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <>
      <CardData goto={'/assignments'} />
      <div className='border-b-2 mt-4 pb-2 flex justify-between'>
        <h1 className='text-3xl'>Your Assignments</h1>
        <p onClick={() => navigate('/assignments')} className='text-[#0B73B7] cursor-pointer hover:underline'>View More</p>
      </div >
      <CoursesTable />
    </>
  )
};