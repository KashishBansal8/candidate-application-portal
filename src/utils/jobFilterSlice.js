import { createSlice } from "@reduxjs/toolkit";

const jobFilterSlice = createSlice({
    name: "JobFilter",
    initialState: {
        experience: [],
        role: [],
        noOfEmployees: "",
        techStack: [],
        location: [],
        minBasePay: [],
        searchCompanyName: ""
    },
    reducers: {
        updateExperience: (state, action) => {
            state.experience = action.payload;
        },
        updateRole: (state, action) => {
            state.role = action.payload;
        },
        updateNoOfEmployees: (state, action) => {
            state.noOfEmployees = action.payload;
        },
        updateTechStack: (state, action) => {
            state.techStack = action.payload;
        },
        updateLocation: (state, action) => {
            state.location = action.payload;
        },
        updateMinBasePay: (state, action) => {
            state.minBasePay = action.payload;
        },
        updateSearchCompanyName: (state, action) => {
            state.searchCompanyName = action.payload;
        }
    }
})

export const { updateExperience, updateLocation, updateMinBasePay, updateNoOfEmployees, updateRole, updateSearchCompanyName, updateTechStack } = jobFilterSlice.actions;

export default jobFilterSlice.reducer;