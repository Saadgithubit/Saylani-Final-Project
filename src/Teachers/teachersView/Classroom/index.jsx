import TabsComponent from "../../../Components/TabsComponent";
import Stream from "../../teacherComponent/Stream";
import ClassWork from "../../teacherComponent/ClassWork";
import TotalStudents from "../../teacherComponent/TotalStudents";

export default function TeachersClassroom() {
    const tabs = [
        { label: 'Stream', content: <Stream />, textColor: '#007B83' },
        { label: 'Class Work', content: <ClassWork />, textColor: '#007B83' },
        { label: 'Total Students', content: <TotalStudents />, textColor: '#007B83' },
    ];

    return (
        <div>
            <TabsComponent tabs={tabs} />
        </div>
    );

}