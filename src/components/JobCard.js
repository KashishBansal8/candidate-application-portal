import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const JobCard = ({ jobData }) => {
    const { companyName, jdLink, jdUid, jobDetailsFromCompany, jobRole, location, logoUrl, maxExp, maxJdSalary, minExp, minJdSalary, salaryCurrencyCode } = jobData;

    return (
        // Single JOb Card

        <Card sx={{ minWidth: 250, minHeight: 435, maxWidth: 450 }}>
            <CardContent>
                <Box sx={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <Avatar
                            alt="Remy Sharp"
                            src={logoUrl}
                            sx={{ width: 24, height: 40, objectFit: 'cover', objectPosition: 'center' }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            {
                                companyName ?
                                    <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                                        {companyName}
                                    </Typography>
                                    : "Company Name"
                            }
                            {
                                jobRole ?
                                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                                        {jobRole}
                                    </Typography>
                                    : "Role"
                            }
                            {
                                location ?
                                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                                        {location}
                                    </Typography>
                                    : ""
                            }
                        </Box>
                    </Box>
                    <Typography variant="body1">
                        Estimated Salary: {minJdSalary ? minJdSalary + "$ -" : ""} {maxJdSalary ? maxJdSalary + "$" : ""}
                    </Typography>
                    <Box>
                        <Typography variant="h6">
                            About Company:
                        </Typography>
                        <Typography variant="body2">
                            About us
                        </Typography>
                        <Typography variant="body2" className='job-details'>
                            {jobDetailsFromCompany}
                        </Typography>
                    </Box>
                    {
                        minExp ?
                            <Box>
                                <Typography variant="body2">
                                    Minimum Experinece
                                </Typography>
                                <Typography variant="body2">
                                    {minExp}
                                </Typography>
                            </Box>
                            : ""
                    }
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small">Apply</Button>
            </CardActions>
        </Card>
    )
}

export default JobCard;
