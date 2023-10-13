import React, { useEffect, useState } from "react";
// import { Data } from "./Ques/Ans";
import '../Component/style.css'
const ApiQuiz = () => {
  const [isCorrect,setIsCorrect]=useState();
  const [isWrong,setIsWrong]=useState();
  const [start, setStart] = useState();
  const [DAta,SetDAta]=useState();
  const [currentIndex,setCurrentIndex]=useState(0)
  const [score,setScore]=useState(0);
  const [selectedOption,setSelectedOption]=useState()
  const Data='';
useEffect(()=>{
  const fData = async()=>{
    const url ='https://the-trivia-api.com/v2/questions';
    const response =await fetch(url);
    const data= await response.json();
    // console.log('dataaaa',data)  
    return data;
  } 
    Data =  fData().then(result => {
  
        return SetDAta(result)
  });
},[])

  const submitAns=(e)=>{
    e.preventDefault();

  }
  const startQuiz = () => {
    setCurrentIndex(currentIndex + 1)
    setStart(!start);
    const CurrentDAta=Data[currentIndex + 1];
    SetDAta(CurrentDAta);
    console.log('Data',DAta)
  console.log('currenIndex',currentIndex);
  // console.log('-----currentIndex-Data-----',DAta[currentIndex].id)
    console.log('currentIndex',currentIndex);
    console.log('Data.length',DAta.length);
    console.log('Questions',DAta[currentIndex].question.text);
    console.log('Answer',DAta[currentIndex].correctAnswer);
    console.log(DAta[currentIndex].id);
  };
  const checkAns = (id) => {
    setIsCorrect(DAta[currentIndex - 1].answer);
    setSelectedOption(id);
    if(DAta[currentIndex - 1].answer !== id){
      setIsWrong(id);
    }if(DAta[currentIndex - 1].answer === id){
      setScore(score + 5);
    }
  };
  const GotoNext=()=>{
  if(currentIndex >= 0 && currentIndex < DAta.length){
    setCurrentIndex(currentIndex + 1)
    const CurrentDAta=Data[currentIndex];
    SetDAta(CurrentDAta);
    setIsCorrect('');
    setIsWrong('');
    setSelectedOption('')
    console.log('--increase Index by click onNext',currentIndex);
  }
  }
  return (
    <>
      <header id="header">
        <h1> Quiz App </h1>
        <h1>{DAta[currentIndex].question.text}</h1>
  
        <div id="score_in_header">
          <div className="header_button">Score:{score}</div>
          <div className="header_button" id="next_level">
            <button id="next_level">Next Level</button>
          </div>
        </div>
      </header>
      <div id={`${start ? "Main" : "Main_Welcome_only"}`}>
        <div id={`${start ? "welcome_Msg" : "welcome_Msg-only"}`}>
          <h1>
            Welcome To
            <br /> <span> Quiz App </span>
          </h1>
        </div>
        <div id={`${start ? "form-Container" : "form-Container-None"}`}>
          <form id="myForm">
            <h1>Quiz App</h1>
            <div id="Question">
              {" "}
              <div>Q:){`${'fsdfsd'}`} </div> {DAta?.question}
            </div>
             <div 
             className={`${isCorrect === 1 ? 'BG_Green' : selectedOption === 1 ? 'Dull_Blue': 'Answer'}`}  
             id={`${isWrong === 1 ? 'BG_Red' : 'Answer'}`} 
              onClick={() => checkAns(1)}>
              <div>a)</div>
            </div>
            <div 
            className={`${isCorrect === 2 ? 'BG_Green': selectedOption === 2 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong === 2 ? 'BG_Red' : 'Answer'}`} onClick={() => checkAns(2)}>
              <div>b)</div>
            </div>
            <div 
            className={`${isCorrect === 3 ? 'BG_Green': selectedOption === 3 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong === 3 ? 'BG_Red' : 'Answer'}`} onClick={() => checkAns(3)}>
              <div>c)</div>
            </div>
            <div 
            className={`${isCorrect ===4 ? 'BG_Green': selectedOption === 4 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong ===4 ? 'BG_Red' : 'Answer'}`} onClick={() => checkAns(4)}>
              {" "}
              <div>d)</div>
            </div>
          

            <div
              id={`${
                start ? "submit_btn-container" : "submit_btn-container-only"
              }`}
              
            >
              <button
                id="submit"
                className="submit_btn"
                onClick={(e)=>{submitAns(e)}}
                 disabled={!selectedOption}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div id={`${start ? "score_Container" : "score_Container-None"}`}>
          <div id="score_Container_child">
            <div id="score">Score : {score}</div>
            <div>
              <button id="Next_Level_button"
               onClick={(e)=>GotoNext(e)}
               >
                Next
              </button>
            </div>
          </div>
        </div>
        <div
          id={`${start ? "start_Container-None" : "start_Container"}`}
        >
          {" "}
          <button onClick={startQuiz}>Start</button>
        </div>
      </div>
    </>
  );
};

export default ApiQuiz;

