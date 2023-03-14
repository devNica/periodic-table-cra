import { serializeElementsOfPeriodicTable } from "../service/api"


export const initialState = {
    rows: serializeElementsOfPeriodicTable()
}

function TableReducer (state = initialState, action = {}) {
    if(action.type === 'SET_TABLE') {
        return {
            ...state,
            table: action.payload
        }
    }
}

export default TableReducer