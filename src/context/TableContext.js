import { createContext, useReducer } from "react"
import TableReducer, { initialState } from "../reducer/TableReducer"


const TableContext = createContext(initialState)

export const TableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TableReducer, initialState)


    const  setPeriodicTable = (data) => {
        dispatch({
            type: "SET_TABLE",
            payload: data
        })
    }

    const value = {
        rows: state.rows,
        setPeriodicTable
    }

    return <TableContext.Provider value={value}>
        {children}
    </TableContext.Provider>

}


export default TableContext