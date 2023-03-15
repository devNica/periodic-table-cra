import { configureStore } from "@reduxjs/toolkit";
import chemicalReducer from "./chemical.slice";

const store = configureStore({
    reducer: {
        chemical: chemicalReducer
    }
})


export default store