import React, { useState } from 'react'

const Fetch_Limit_Data = () => {

    const data= async ()=>{

    const url='https://fakestoreapi.com/products/?limit=10&offset=1';
    const FData= await fetch(url);
    const parsedFdata=await FData.json();
    console.log(parsedFdata);
    // return parsedFdata;
}
data();
// data().then((responce)=>{
//     let MyIndex='';
//     let dataLimit=5;
//     // const [dataLimit,setDataLimit]=useState(5)
//     for(MyIndex=0; MyIndex<=dataLimit;MyIndex++){
//         const Data=responce[MyIndex];
//         console.log(Data);
//         // console.log('MyIndex',MyIndex)
//     }
    // setTimeout(()=>{
    //     dataLimit=dataLimit + 5;
    //     // setDataLimit(dataLimit+5)
    //     console.log('dataLimit',dataLimit);
    // },5000)
// })
  return (
    <>
    </>
  )
}

export default Fetch_Limit_Data