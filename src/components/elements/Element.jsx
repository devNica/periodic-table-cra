import './element.css'


const Element = ({ item, index }) => {

    return (

        <div
            className={

                item.catg !== "" ? `element catg catg-${item.group}` :
                    item.active ? `element element-active ${item.group}` :
                        "element hidden"
            }
            key={index}
            style={{ backgroundColor: `${item.bgColor}`, color: `${item.txColor}` }}

        >
            {
                item.catg === "" ?
                    <>
                        <span className="atomic-number">
                            {item.atomicNumber}
                        </span>
                        <span className="atomic-weight">
                            {item.atomicWeight}
                        </span>
                        {item.symbol}

                    </> : null
            }

            <span className='element-name'>
                {item.nameEs}
            </span>

        </div>
    )
}

export default Element