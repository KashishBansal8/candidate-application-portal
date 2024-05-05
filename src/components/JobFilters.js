import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import { experinece, noOfExployees, location, minBasePay, techStack } from '../utils/DropdownData';

const JobFilters = () => {
    const [selectedRole, setSelectedRole] = useState([]);
    const [selectedNoOfEmployees, setSelectedNoOfEmployees] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState("");
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [selectedTechStack, setSelectedTechStack] = useState([]);
    const [selectedMinBasePay, setSelectedMinBasePay] = useState("");
    const [searchCompanyNameInput, setSearchCompanyNameInput] = useState("");

    const handleMultiDropdownFilterValueChange = (event) => {
        const {
            target: { name },
        } = event;
        console.log(event.target.name)
        if (name === "role") {
            const roleVal = event.target.value;
            setSelectedRole(
                typeof roleVal === 'string' ? roleVal.split(',') : roleVal
            );
        }
        else if (name === "noOfExployees") {
            const noOfEmployeesVal = event.target.value;
            setSelectedNoOfEmployees(
                typeof noOfEmployeesVal === 'string' ? noOfEmployeesVal.split(',') : noOfEmployeesVal
            );
        }
        else if (name === "location") {
            const locationVal = event.target.value;
            setSelectedLocation(
                typeof locationVal === 'string' ? locationVal.split(',') : locationVal
            );
        }
        else if (name === "techStack") {
            const techStackVal = event.target.value;
            setSelectedTechStack(
                typeof techStackVal === 'string' ? techStackVal.split(',') : techStackVal
            );
        }
    };

    const filterJobData = () => {
        console.log("A")
    }

    useEffect(() => {
        filterJobData();
    }, [selectedRole, selectedExperience, selectedLocation, selectedNoOfEmployees, selectedMinBasePay, selectedTechStack, searchCompanyNameInput])

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
                            {experinece?.map((name) => (
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
                            onChange={(e) => setSelectedExperience(e.target.value)}

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
                            onChange={(e) => setSelectedMinBasePay(e.target.value)}

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
                        onInput={(e) => setSearchCompanyNameInput(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default JobFilters