import{configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counters/mycounterSlice"

export const store=configureStore({
    reducer:{
        counter:counterReducer,
    },
});