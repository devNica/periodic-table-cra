import './categories.css'


const Categories = ({item}) => {
    return (
        <div className='catg'>
            <div className="box-color" style={{ backgroundColor: `${item.color}` }}></div>
            <span className='catg-name'>{item.type_es}</span>
        </div>
    )
}

export default Categories