import React from 'react'
import { useEffect,useState } from 'react';

const APIData = () => {
  const [ApiData,setApiData]=useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
      const url =`https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple`
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
    return ApiData;
}

export default APIData;