import { useEffect } from 'react'
import { getStudentData } from '../../../Config/mongodbmain'
export default function TotalStudents() {
    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        const data = await getStudentData()
    }
    return (
        <div className="flex-col space-y-12">
            <div className="border-b-2 w-[50%] p-2 border-[#007B83]">
                <h1 className="text-3xl text-[#007B83]">Teacher</h1>
                <p className="text-slate-700 m-2">Teacher Name</p>
            </div>
            <div className="border-b-2 w-[50%] p-2 border-[#007B83]">
                <h1 className="text-3xl text-[#007B83] mb-2">Student</h1>
            </div>
            <div className="border-2 w-[50%] h-96 p-4">
                <p>Display Students</p>
            </div>
        </div>
    )
}