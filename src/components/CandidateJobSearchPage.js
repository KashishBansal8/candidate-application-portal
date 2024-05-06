import React from 'react';
import JobFilters from './JobFilters'
import JobListing from './JobListing';
import "./CandidateJobSearchPage.css";
import Box from '@mui/material/Box';

const CandidateJobSearchPage = () => {
    return (
        <Box className="candidate-job-search-wrapper" sx={{ display: 'flex', flexDirection: 'column', gap: '50px', alignItems: ' center' }}>
            <JobFilters />
            <JobListing />
        </Box>
    )
}

export default CandidateJobSearchPage
