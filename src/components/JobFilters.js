import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import { experinece, noOfExployees, location, minBasePay, techStack, jobRoles } from '../utils/DropdownData';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
import { updateFilteredJobsData } from '../utils/jobDataSlice';
import { updateExperience, updateLocation, updateMinBasePay, updateNoOfEmployees, updateRole, updateSearchCompanyName, updateTechStack } from '../utils/jobFilterSlice';
import useJobdata from '../utils/useJobData';

const JobFilters = () => {
    const [selectedRole, setSelectedRole] = useState([]);
    const [selectedNoOfEmployees, setSelectedNoOfEmployees] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState("");
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedTechStack, setSelectedTechStack] = useState([]);
    const [selectedMinBasePay, setSelectedMinBasePay] = useState("");
    const [searchCompanyNameInput, setSearchCompanyNameInput] = useState("");

    const jobsData = useSelector((store) => store.jobData.jobsData);
    const filteredJobsData = useSelector((store) => store.jobData.filteredJobsData);
    const dispatch = useDispatch();

    const handleMultiDropdownFilterValueChange = (event) => {
        const {
            target: { name },
        } = event;
        if (name === "role") {
            const roleVal = event.target.value;
            setSelectedRole(
                typeof roleVal === 'string' ? roleVal.split(',') : roleVal
            );
            dispatch(updateRole(selectedRole));
        }
        else if (name === "noOfExployees") {
            const noOfEmployeesVal = event.target.value;
            setSelectedNoOfEmployees(
                typeof noOfEmployeesVal === 'string' ? noOfEmployeesVal.split(',') : noOfEmployeesVal
            );
            dispatch(updateNoOfEmployees(selectedNoOfEmployees));
        }
        else if (name === "location") {
            const locationVal = event.target.value;
            setSelectedLocation(
                typeof locationVal === 'string' ? locationVal.split(',') : locationVal
            );
            dispatch(updateLocation(selectedLocation));
        }
        else if (name === "techStack") {
            const techStackVal = event.target.value;
            setSelectedTechStack(
                typeof techStackVal === 'string' ? techStackVal.split(',') : techStackVal
            );
            dispatch(updateTechStack(selectedTechStack));
        }
    };

    const fetchJobData = useJobdata();

    useEffect(() => {
        const filterFromData = filteredJobsData.length ? filteredJobsData : jobsData;
        const filteredJobs = filterFromData?.filter((data) =>
            selectedRole.some((role) => data.jobRole.toLowerCase().includes(role.toLowerCase())
                || data.jobDetailsFromCompany.toLowerCase().includes(role.toLowerCase())
            ));

        dispatch(updateFilteredJobsData(filteredJobs))
    }, [selectedRole, fetchJobData]);

    useEffect(() => {
        const filterFromData = filteredJobsData.length ? filteredJobsData : jobsData;
        const filteredJobs = filterFromData?.filter((data) => selectedExperience >= data.minExp && selectedExperience <= data.maxExp);

        dispatch(updateFilteredJobsData(filteredJobs))
    }, [selectedExperience, fetchJobData]);

    useEffect(() => {
        const filterFromData = filteredJobsData.length ? filteredJobsData : jobsData;
        const filteredJobs = filterFromData?.filter((data) => selectedLocation.some((location) => location.toLowerCase().includes(data.location.toLowerCase()) || location.toLowerCase() === "in-office" && data.location.toLowerCase() !== "remote" ? data : ""
        ));

        dispatch(updateFilteredJobsData(filteredJobs))
    }, [selectedLocation, fetchJobData]);

    useEffect(() => {
        if (!searchCompanyNameInput.length) {
            dispatch(updateFilteredJobsData(jobsData))
        }
        const filteredJobs = jobsData?.filter((data) => data.companyName.toLowerCase().includes(searchCompanyNameInput.toLowerCase()));

        dispatch(updateFilteredJobsData(filteredJobs))
    }, [searchCompanyNameInput, fetchJobData]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 6, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {/* Role Filter */}
                <Grid xs={1} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-multiple-name-label">Role</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name="role"
                            value={selectedRole}
                            onChange={handleMultiDropdownFilterValueChange}
                        >
                            {jobRoles?.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* No of Employees */}
                <Grid xs={1} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-multiple-name-label">Number Of Employees</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name="noOfExployees"
                            value={selectedNoOfEmployees}
                            onChange={handleMultiDropdownFilterValueChange}
                        >
                            {noOfExployees?.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Experience */}
                <Grid xs={1} md={2}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel htmlFor="demo-customized-select-label">Experience</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            name='experience'
                            value={selectedExperience}
                            onChange={(e) => { setSelectedExperience(e.target.value); dispatch(updateExperience(selectedExperience)); }}

                        >
                            {experinece.map((value, index) => {
                                return <MenuItem value={value}>{value}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Location */}
                <Grid xs={1} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-multiple-name-label">Remote</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name="location"
                            value={selectedLocation}
                            onChange={handleMultiDropdownFilterValueChange}
                        >
                            {location?.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Tech Stack */}
                <Grid xs={1} md={2}>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel id="demo-multiple-name-label">Tech Stack</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name="techStack"
                            value={selectedTechStack}
                            onChange={handleMultiDropdownFilterValueChange}
                        >
                            {techStack?.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Min Base Pay */}
                <Grid xs={1} md={2}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                        <InputLabel htmlFor="demo-customized-select-label">Min Base Pay</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            name='minBasePay'
                            value={selectedMinBasePay}
                            onChange={(e) => { setSelectedMinBasePay(e.target.value); dispatch(updateMinBasePay(selectedMinBasePay)); }}

                        >
                            {minBasePay.map((value, index) => {
                                return <MenuItem value={value}>{value}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Search Bar */}
                <Grid>
                    <TextField
                        id="search-bar"
                        className="text"
                        label="Company Name"
                        variant="outlined"
                        placeholder="Search Company Name"
                        size="small"
                        value={searchCompanyNameInput}
                        onInput={(e) => { setSearchCompanyNameInput(e.target.value); dispatch(updateSearchCompanyName(searchCompanyNameInput)); }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default JobFilters
