import React, { useState } from 'react'

 const Api = () => {
    const [apiData,setApiData]=useState();
    // async Fdata =()=>{
    //     const url='https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    //     const data = await fetch(url)
    //     console.log(data)

    // }

    const Fdata = async () => {
        const url='https://datausa.io/api/data?drilldowns=Nation&measures=Population';
        const response = await fetch(url);
        const data = await response.json(); // Convert the response to JSON
        // console.log(data);
        setApiData(data.data)
    // console.log(apiData.source,'====')
    // console.log(apiData,'----')
    // console.log(apiData,'-----')

    }
    Fdata(); 
  return (<>
    <div>Api</div>
    {/* <h4>{apiData.data.source}</h4> */}
    <h4>hi</h4>
    {apiData && apiData.map((data)=>{
        return<>
        <table>
            <thead>
                <tr></tr>
            </thead>
            <tbody>
                <tr>              
                <td>{data.Year}</td>
                <td>{data.Nation}</td>
                <td>{data.Population}</td>
                </tr>

            </tbody>
        </table>
        </>
    })}
    </>
  )
}

export default Api;