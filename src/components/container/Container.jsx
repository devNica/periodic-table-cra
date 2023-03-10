import './container.css'
import elements from '../../service/elements.json'

const Container = () => {


    let render = elements.rows.map((row) => {
        const c = []
        const series = [...Array(19).keys()].slice(1)

        row.forEach((r) => {
            c.push({
                colIndex: r.colIndex,
                symbol: r.symbol,
                active: true,
                bgColor: r.bgColor,
                txColor: r.txColor,
                nameEs: r.name_es,
                atomicNumber: r.atomicNumber,
                atomicWeight: r.weight.toFixed(2)
            })
        })


        series.forEach((s, index) => {
            if (!c.some(r => r.colIndex === s)) {
                c.push({
                    colIndex: s,
                    symbol: "",
                    active: false
                })
            }
        })

        c.sort((a, b) => a.colIndex - b.colIndex)

        return c.map((elem, index) => (
            <div
                className={elem.active ? "active" : ""} key={index}
                style={{ backgroundColor: `${elem.bgColor}`, color: `${elem.txColor}` }}
            >

                <span className="atomic-number">
                    {elem.atomicNumber}
                </span>
                <span className="atomic-weight">
                    {elem.atomicWeight}
                </span>

                {elem.symbol}
                
                <span className='element-name'>
                    {elem.nameEs}
                </span>
            </div>
        ))
    })


    return (
        <div className="container">
            <div className="grid-table">
                {render}
            </div>
        </div>
    )
}

export default Container