import React, { useState } from 'react'

const Even_Odd = () => {


    const number=prompt("Plz Enter a Number");

    if(number && number%2==0){
        console.log("even")
    }
    if(number%2!=0){
        console.log("odd")
    }
    if(number === ''){
        console.log('😒😒')
    }
  return (
    <>
     </>
  )
}

export default Even_Odd;