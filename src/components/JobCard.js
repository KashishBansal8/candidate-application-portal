import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const JobCard = ({ jobData }) => {
    const { minJdSalaryInRupee, setMinJdSalaryInRupee } = useState(0);
    const { maxJdSalaryInRupee, setMaxJdSalaryInRupee } = useState(0);
    const { companyName, jdLink, jdUid, jobDetailsFromCompany, jobRole, location, logoUrl, maxExp, maxJdSalary, minExp, minJdSalary, salaryCurrencyCode } = jobData;

    // if (salaryCurrencyCode === "USD") {
    //     const salary = maxJdSalary * 83;
    //     // setMaxJdSalaryInRupee(1);
    //     console.log(salary)
    //     // setMinJdSalaryInRupee(minJdSalary * 83);
    // }
    // useEffect(() => {
    //     setMaxJdSalaryInRupee((val) => val + 1);
    // }, [])
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Avatar
                    alt="Remy Sharp"
                    src={logoUrl}
                    sx={{ width: 24, height: 24 }}
                />
                <Typography gutterBottom variant="h5" component="div">
                    {companyName}
                </Typography>
                <Typography variant="h6" color="div">
                    {jobRole}
                </Typography>
                <Typography variant="h6" color="div">
                    {location}
                </Typography>
                <Typography variant="h6" color="div">
                    Estimated Salary: {minJdSalary}$ - {maxJdSalary}$
                </Typography>
                <Typography variant="h6" color="div">
                    About Company:
                </Typography>
                <Typography variant="h6" color="div">
                    About us
                </Typography>
                <Typography variant="div" color="div">
                    {jobDetailsFromCompany}
                </Typography>
                <Typography variant="h6" color="div">
                    Minimum Experinece
                </Typography>
                <Typography variant="h6" color="div">
                    {minExp}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Apply</Button>
            </CardActions>
        </Card>
    )
}

export default JobCard;
