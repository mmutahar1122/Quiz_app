export const fData = async()=>{

    const url ='https://the-trivia-api.com/v2/questions';
    const response =await fetch(url);
    const data= await response.json();
    console.log(data)
    
    return data;

  } 
 
  export const Data= fData().then(result => {
      console.log('Result from Data function:', result);
      return result;
  });