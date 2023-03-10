import './element.css'

const Element = ({ item, index }) => {
    return (

        <div
            className={item.active ? "element active" : "element"} key={index}
            style={{ backgroundColor: `${item.bgColor}`, color: `${item.txColor}` }}
        >
            <span className="atomic-number">
                {item.atomicNumber}
            </span>
            <span className="atomic-weight">
                {item.atomicWeight}
            </span>

            {item.symbol}

            <span className='element-name'>
                {item.nameEs}
            </span>
        </div>
    )
}

export default Element