import React, { useRef, useEffect } from 'react'
import useJobdata from '../utils/useJobData'
import JobCard from './JobCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';

const JobListing = () => {
    const fetchJobData = useJobdata();
    const observerTarget = useRef(null);

    const isLoadingJobData = useSelector((store) => store.jobData.isLoadingJobData);
    const filteredJobsData = useSelector((store) => store.jobData.filteredJobsData);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    fetchJobData();
                }
            },
            { threshold: 1 }
        );

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                observer.unobserve(observerTarget.current);
            }
        };
    }, [fetchJobData]);


    useEffect(() => {
        fetchJobData();
    }, [])

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
                {isLoadingJobData && <div>Loading...</div>}

                <div ref={observerTarget}></div>
            </Grid>
        </Box>
    )
}

export default JobListing
