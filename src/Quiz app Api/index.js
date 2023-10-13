import React, { useEffect, useState } from 'react'

const Quiz_App_Api = () => {
const [apiData,setApiData]=useState();
useEffect(()=>{
        const quiz_app= async ()=>{
        const url='https://the-trivia-api.com/v2/questions';
        const data = fetch(url);
        const response =await data;
        const JsonFormat=await response.json();
        console.log(JsonFormat);
        setApiData(JsonFormat)
    }
    quiz_app();
},[])
console.log(apiData,'---');
    return (
        <div>Quiz_App_Api</div>
        )
    }
    
    export default Quiz_App_Api;
    // https://the-trivia-api.com/v2/questions