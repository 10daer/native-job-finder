import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "../config.env";
// const rapidKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "207323ced0msh7fca304b163540dp129155jsn5efe1333e696",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
      // setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("http://localhost:8000/data");
  //     const res = await response.json();
  //     setData(res);
  //     // setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     alert("There is an error");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const fetchOneData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("http://localhost:8000/data");
  //     const res = await response.json();
  //     setData((data) => res.find((el) => el.job_id === query.job_id));
  //     // setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     alert("There is an error");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   query.job_id ? fetchOneData() : fetchData();
  // }, []);

  const refetch = () => {
    // setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
