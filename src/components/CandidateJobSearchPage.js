import React from 'react';
import JobFilters from './JobFilters'
import JobListing from './JobListing';
import "./CandidateJobSearchPage.css";
import Box from '@mui/material/Box';

const CandidateJobSearchPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px', margin: '40px 0' }}>
            <JobFilters />
            <JobListing />
        </Box>
    )
}

export default CandidateJobSearchPage
