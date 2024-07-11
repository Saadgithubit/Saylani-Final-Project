import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAsigmmentById } from "../../Config/mongodbmain"
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

export default function SeeAssignment() {
    const [data, setdata] = useState()
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await getAsigmmentById(id)
        setdata(res.data)
        console.log(res.data);
    }
    if (!data) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <div className="flex space-x-4 justify-center">
            <div className="w-[50%]">
                <span className="flex items-center space-x-4">
                    <AssignmentOutlinedIcon sx={{ background: '#129EAF', color: 'white', borderRadius: '50%', width: '40px', height: 'auto', padding: '10px' }} />
                    <h1 className="text-2xl text-slate-700">{data.title}</h1>
                </span>
                <p>{data.dueDate}</p>
                <div className="mt-2 py-2 border-t-2 border-b-2">
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="border-2 p-4 w-[30%]">
                <span className="flex justify-between">
                    <h1>Your Work</h1>
                    <p className="text-red-500">Missing</p>
                </span>
                <button className="border-2 mt-2 w-full py-2 text-[#1A73E8] hover:bg-slate-200">Add Or Create</button>
                <button className="border-2 w-full py-2 bg-[#1A73E8] text-[white] mt-2 hover:bg-slate-200">Mark as done</button>
            </div>
        </div>
    )
}