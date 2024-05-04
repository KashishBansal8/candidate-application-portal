import React from 'react'
import useJobdata from '../utils/useJobData'

const JobListing = () => {
    const jobData = useJobdata();
    console.log("jobData", jobData)
    return (
        <div>

        </div>
    )
}

export default JobListing
