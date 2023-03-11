import PeriodicTable from '../PeriodicTable/PeriodicTable'
import SideBar from '../sidebar/SideBar'
import './container.css'


const Container = () => {

    return (
        <div className="container">
            <div className="table-wrapper">
                <PeriodicTable />
            </div>
            <SideBar/>
        </div>

    )
}

export default Container