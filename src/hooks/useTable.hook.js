import { useContext } from "react"
import TableContext from "../context/TableContext"


const useTableHook = () => {
    const context = useContext(TableContext)
    
    if (context === undefined) throw new Error("Failed Context")

    return context
}

export default useTableHook