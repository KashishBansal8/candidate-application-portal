import { configureStore } from "@reduxjs/toolkit";
import jobDataReducer from "./jobDataSlice";

const appStore = configureStore({
    reducer: {
        jobData: jobDataReducer
    }
})

export default appStore;