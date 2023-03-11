import Categories from '../categories/Categories'
import elementCategories from '../../service/categories.json'
import './sidebar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            {
                elementCategories.map((cat, index) => (
                    <Categories item={cat} key={index} />
                ))
            }
        </div>
    )
}

export default SideBar