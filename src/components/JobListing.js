import React from 'react'
import useJobdata from '../utils/useJobData'
import JobCard from './JobCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';

const JobListing = () => {
    const jobData = useJobdata();

    const isLoadingJobData = useSelector((store) => store.jobData.isLoadingJobData);
    const filteredJobsData = useSelector((store) => store.jobData.filteredJobsData);
    // console.log("isLoadingJobData", isLoadingJobData, filteredJobsData)

    // const { jdList } = jobData;
    // console.log("jobData", jobData)
    // const jobsData = filteredJobsData.len/gth ? filteredJobsData : jobData;

    if (isLoadingJobData) {
        return (<h1>Loading...</h1>)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    filteredJobsData?.map((jobData, index) =>
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
