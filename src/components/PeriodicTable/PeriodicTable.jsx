import './periodictable.css'
import { serializeElementsOfPeriodicTable } from '../../service/api'
import Element from '../elements/Element'


const PeriodicTable = () => {

    const render = serializeElementsOfPeriodicTable().map((row) => (
        row.map((elem, index)=>(
           <Element 
                item={elem} 
                index={index}
            />
        ))
    ))

    return(
        <div className="periodic-table">
            {render}
        </div>
    )
}

export default PeriodicTable