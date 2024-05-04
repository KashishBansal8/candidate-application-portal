import { useEffect, useState } from "react";
import { JOB_DATA_URL } from "./constants";

const useJobdata = () => {
    const [jobData, setJobData] = useState([]);

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
        setJobData(jsonData);
    }

    useEffect(() => {
        fetchJobData();
    }, [])

    return jobData;
}

export default useJobdata;