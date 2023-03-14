import './periodictable.css'
import Element from '../elements/Element'

import { useTableHook } from '../../hooks'

const PeriodicTable = () => {

    const { rows } = useTableHook()

    const render = rows.map((row) => (
        row.map((elem, index) => (
            <Element
                item={elem}
                index={index}
            />
        ))
    ))

    return (
        <div className="table-wrapper">
            <div className='hideme'></div>
            {render}
        </div>
    )
}

export default PeriodicTable