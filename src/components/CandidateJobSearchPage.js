import React from 'react';
import JobFilters from './JobFilters'
import JobListing from './JobListing';

const CandidateJobSearchPage = () => {
    return (
        <div>
            <JobFilters />
            <JobListing />
        </div>
    )
}

export default CandidateJobSearchPage
