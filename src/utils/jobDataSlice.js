import { createSlice } from "@reduxjs/toolkit";

const jobDataSlice = createSlice({
    name: "JobData",
    initialState: {
        jobsData: [],
        filteredJobsData: [],
        isLoadingJobData: true
    },
    reducers: {
        addJobsData: (state, action) => {
            state.jobsData.length = 0;
            state.jobsData = action.payload;
        },
        updateLoadingJobdata: (state, action) => {
            state.isLoadingJobData = action.payload;
        },
        updateFilteredJobsData: (state, action) => {
            state.filteredJobsData = action.payload;
        }
    }
})

export const { addJobsData, updateLoadingJobdata, updateFilteredJobsData } = jobDataSlice.actions;

export default jobDataSlice.reducer;