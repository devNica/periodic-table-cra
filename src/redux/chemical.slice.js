import { createSlice } from "@reduxjs/toolkit";
import elements from '../service/elements.json'
import { serializeElementsOfPeriodicTable } from "../service/api";


const initialState = {
    rows: serializeElementsOfPeriodicTable(),
    element: [],

}

const chemicalSlice = createSlice({
    name: "chemical",
    initialState,

    reducers: {
        fetchElement(state, action) {
            const elementId = action.payload
            const x= []

            elements.rows.slice(1).forEach(row => {
                const y = row.find(element => element.atomicNumber === Number(elementId))
                if (y !== undefined) {
                    x.push(y)
                    return
                }
            })

            state.element = x

        }
    }
})

export const { fetchElement } = chemicalSlice.actions

export default chemicalSlice.reducer