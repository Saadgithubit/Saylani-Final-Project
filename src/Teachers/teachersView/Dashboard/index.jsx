import { useSelector } from "react-redux";
import CardData from "../../../Components/Cards";

export default function TeachersDashboard() {
    const user = useSelector(state => state.userReducer.user);
    { !user && navigate('/signin') }
    return (
        <div>
            <CardData goto={'/teacherclassroom'} />
        </div>
    )
}