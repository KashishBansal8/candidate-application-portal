import { createSlice } from "@reduxjs/toolkit";

const jobDataSlice = createSlice({
    name: "JobData",
    initialState: {
        jobsData: [],
        filteredJobsData: [],
        isLoadingJobData: false,
        pageNumber: 1
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
        },
        updatePageNumber: (state, action) => {
            state.pageNumber = action.payload;
        }
    }
})

export const { addJobsData, updateLoadingJobdata, updateFilteredJobsData, updatePageNumber } = jobDataSlice.actions;

export default jobDataSlice.reducer;