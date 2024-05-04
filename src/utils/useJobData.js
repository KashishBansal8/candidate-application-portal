import { useEffect, useState } from "react";
import { JOB_DATA_URL } from "./constants";

const useJobdata = () => {
    const [jobData, setJobData] = useState([]);

    const fetchJobData = () => {
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

        fetch(JOB_DATA_URL, requestOptions)
            .then((response) => response.text())
            .then((result) => setJobData(result))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetchJobData();
    }, [])

    return jobData;
}

export default useJobdata;