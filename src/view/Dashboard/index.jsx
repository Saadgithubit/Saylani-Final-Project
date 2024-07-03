import CardData from '../../Components/Cards'
import CoursesTable from '../../Components/coursesTable'

export default function Dashboard() {
  return (
    <>
      <CardData goto={'/assignment'} />
      <CoursesTable />
    </>
  )
}