import { createSlice } from "@reduxjs/toolkit";

const jobDataSlice = createSlice({
    name: "JobData",
    initialState: {
        jobsData: [],
        isLoadingJobData: true,
        allJobRoles: []
    },
    reducers: {
        addJobsData: (state, action) => {
            state.jobsData.push(action.payload);
        },
        updateLoadingJobdata: (state, action) => {
            state.isLoadingJobData = action.payload;
        }
    }
})

export const { addJobsData, updateLoadingJobdata } = jobDataSlice.actions;

export default jobDataSlice.reducer;