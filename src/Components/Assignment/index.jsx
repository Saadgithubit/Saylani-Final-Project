import { useEffect, useState } from "react"
import { getTeacherAllAsigmment } from "../../Config/mongodbmain";

export default function Assignment() {
const [data,serData] = useState([])


    useEffect(() => {
       
        fetcData()
      }, []);


      const fetcData = async() => {
      const data =  await getTeacherAllAsigmment()
       } 



    return (
        <div>Assignment</div>
    )
}