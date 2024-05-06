import { configureStore } from "@reduxjs/toolkit";
import jobDataReducer from "./jobDataSlice";
import jobFilterReducer from "./jobFilterSlice";

const appStore = configureStore({
    reducer: {
        jobData: jobDataReducer,
        jobFilter: jobFilterReducer
    }
})

export default appStore;