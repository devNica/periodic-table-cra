import PeriodicTable from '../PeriodicTable/PeriodicTable'
import SideBar from '../sidebar/SideBar'
import './container.css'


const Container = () => {

    return (
        <div className="container">
            <PeriodicTable />
            <SideBar />
        </div>

    )
}

export default Container