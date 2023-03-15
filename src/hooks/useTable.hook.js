import { useSelector } from "react-redux"

const useGetRows = () => useSelector(state=>state.chemical.rows)
const useGetElement = () => useSelector(state=>state.chemical.element)

export {
    useGetRows,
    useGetElement
}