import { useCallback } from "react";
import { JOB_DATA_URL } from "./constants";
import { addJobsData, updateFilteredJobsData, updateLoadingJobdata, updatePageNumber } from "./jobDataSlice";
import { useDispatch, useSelector } from "react-redux";

const useJobdata = () => {
    const dispatch = useDispatch();
    const isLoadingJobData = useSelector((store) => store.jobData.isLoadingJobData);
    const jobsData = useSelector((store) => store.jobData.jobsData);
    const pageNumber = useSelector((store) => store.jobData.pageNumber);

    const fetchJobData = useCallback(async () => {
        if (isLoadingJobData) return;
        dispatch(updateLoadingJobdata(true));
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": pageNumber
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const data = await fetch(JOB_DATA_URL, requestOptions);
        const jsonData = await data.json();
        dispatch(addJobsData([...jobsData, ...jsonData.jdList]));
        dispatch(updateFilteredJobsData([...jobsData, ...jsonData.jdList]));
        dispatch(updatePageNumber(pageNumber + 1));
        dispatch(updateLoadingJobdata(false));
    }, [pageNumber, isLoadingJobData]);

    return fetchJobData;
}

export default useJobdata;