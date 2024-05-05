import { useEffect, useState } from "react";
import { JOB_DATA_URL } from "./constants";
import { addJobsData, updateFilteredJobsData, updateLoadingJobdata } from "./jobDataSlice";
import { useDispatch } from "react-redux";

const useJobdata = () => {
    const [jobData, setJobData] = useState([]);

    const dispatch = useDispatch();

    const fetchJobData = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const data = await fetch(JOB_DATA_URL, requestOptions);
        const jsonData = await data.json();

        setJobData(jsonData.jdList);
        dispatch(addJobsData(jsonData.jdList));
        dispatch(updateFilteredJobsData(jsonData.jdList));
        dispatch(updateLoadingJobdata(false));
    }

    useEffect(() => {
        fetchJobData();
    }, [])

    return jobData;
}

export default useJobdata;