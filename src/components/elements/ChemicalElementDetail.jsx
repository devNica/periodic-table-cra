import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchElement } from '../../redux/chemical.slice'
import { useGetElement } from '../../hooks/useTable.hook'
import './chemical.css'
import Card from '../card/Card'

const ChemicalElementDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const element = useGetElement()

    useEffect(() => {
        dispatch(fetchElement(id))
    }, [dispatch, id])


    return (

        <div className="chemical-element">
            <Card element={element}/>

        </div>
    )
}

export default ChemicalElementDetail