import React from 'react'
import useJobdata from '../utils/useJobData'
import JobCard from './JobCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const JobListing = () => {
    const jobData = useJobdata();
    const { jdList } = jobData;
    console.log("jobData", jdList)
    if (!jobData) {
        return (<h1>Loading...</h1>)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    jdList?.map((jobData, index) =>
                        <Grid xs={6} sm={4} md={4} key={index}>
                            <JobCard jobData={jobData} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default JobListing
