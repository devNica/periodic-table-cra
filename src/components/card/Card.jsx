import './card.css'


const Card = ({element}) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="element-symbol" style={{ backgroundColor: `${element[0].bgColor}` }}>
                    <h1 style={{ color: `${element[0].txColor}` }}>{element[0].symbol}</h1>
                </div>
                <div className="element-name">
                    <h1>{element[0].name_es}</h1>
                </div>

            </div>
            <div className="card-body">
                <div className="particle-detail">
                    <div className='electrons'>
                        {element[0].atomicStructure.protons}
                    </div>
                    <span className='particle-name'>ELECTRONS</span>
                </div>
                <div className="particle-detail">
                    <div className='neutrons'>
                        {element[0].atomicStructure.neutrons}
                    </div>
                    <span className='particle-name'>NEUTRONS</span>
                </div>
                <div className="particle-detail">
                    <div className='protons'>
                        {element[0].atomicStructure.protons}
                    </div>
                    <span className='particle-name'>PROTONS</span>
                </div>
            </div>

            <div className="card-footer">
                <div className="other-char">
                    <span>WEIGHT:</span>
                    <span className='w-value'>{Number(element[0].weight).toFixed(2)}</span>
                </div>
            </div>

        </div>
    )
}

export default Card