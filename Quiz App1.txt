import React, { useState,useEffect } from "react";
import "./style.css";
import { Data } from "./Ques/Ans";

const InputFields = () => {
  const [isCorrect,setIsCorrect]=useState();
  const [isWrong,setIsWrong]=useState();
  const [start, setStart] = useState();
  const [DAta,SetDAta]=useState(Data);
  const [filterData,setFilterData]=useState();
  const [currentIndex,setCurrentIndex]=useState(0)
  const [score,setScore]=useState(0);
  const [selectedOption,setSelectedOption]=useState()
  const [onlyscore,setOnlyScore]=useState();
  const [changeButton,setChangeButton]=useState(false);
const [isDisable,setIsDisable]=useState(true)
console.log(isDisable)
  const submitAns=(e)=>{
    e.preventDefault();
    setSelectedOption('');

    setIsCorrect(DAta[currentIndex - 1].answer);
    if(DAta[currentIndex - 1].answer !== selectedOption){
      setIsWrong(selectedOption);
    }if(DAta[currentIndex - 1].answer === selectedOption){
      setScore(score + 5);
    }
    setChangeButton(true);
    setIsDisable(false)
  }
  const startQuiz = () => {

    setStart(!start);
    setCurrentIndex(currentIndex + 1);
    const CurrentDAta=Data[currentIndex];
    setFilterData(CurrentDAta);
  };
  const SelectedOption = (id) => {
  if(isDisable){
    setSelectedOption(id);
  };};

  const GotoNext=()=>{
  if(currentIndex >= 0 && currentIndex < DAta.length){
    const CurrentDAta=Data[currentIndex];
    setFilterData(CurrentDAta);
    setCurrentIndex(currentIndex + 1);
    setIsWrong('');
    setIsCorrect('');
  }
  if(currentIndex === DAta.length){
    setCurrentIndex(currentIndex + 1) ;
    setOnlyScore(currentIndex + 1)

  }
  setChangeButton(false)
  setIsDisable(true)
  }

  return (
    <>
      <header id="header">
        <h1> Quiz App </h1>
        <div id="score_in_header">
          <div className="header_button">Score:{score}</div>
          <div className="header_button" id="next_level">
            <button id="next_level" 
             onClick={(e)=>GotoNext(e)}
              disabled={!isCorrect}>Next Level</button>
          </div>
        </div>
      </header>
      <div id={`${ onlyscore ? 'AllNone' :start ? "Main" : "Main_Welcome_only"}`}>
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
              <div>Q:{filterData?.id})</div> {filterData?.question}
            </div>
           
             <div 
             className={`${isCorrect === 1 ? 'BG_Green' : selectedOption === 1 ? 'Dull_Blue': 'Answer'}`}  
             id={`${isWrong === 1 ? 'BG_Red' : 'Answer'}`} 
              onClick={() => SelectedOption(1)}
              >
              <div>a)</div>{filterData?.options[0]}
            </div>
            <div 
            className={`${isCorrect === 2 ? 'BG_Green': selectedOption === 2 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong === 2 ? 'BG_Red' : 'Answer'}`} onClick={() => SelectedOption(2)}>
              <div>b)</div>{filterData?.options[1]}
            </div>
            <div 
            className={`${isCorrect === 3 ? 'BG_Green': selectedOption === 3 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong === 3 ? 'BG_Red' : 'Answer'}`} onClick={() => SelectedOption(3)}>
              <div>c)</div>{filterData?.options[2]}
            </div>
            <div 
            className={`${isCorrect ===4 ? 'BG_Green': selectedOption === 4 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong ===4 ? 'BG_Red' : 'Answer'}`} onClick={() => SelectedOption(4)}>
              {" "}
              <div>d)</div>{filterData?.options[3]}
            </div>
            <div
              id={`${
                start ? "submit_btn-container" : "submit_btn-container-only"
              }`}
            >
              {changeButton ? <button 
              // id="Next_Level_button" 
              id="submit"
              className="submit_btn"
              onClick={(e)=>GotoNext(e)}
              disabled={!isCorrect}
              >
                Next
              </button>
              :
              !changeButton ? <button
                id="submit"
                className="submit_btn"
                onClick={(e)=>{submitAns(e)}}
                disabled={!selectedOption}>
                Check
              </button> : ''}
            </div>
          </form>
        </div>

        <div id={`${start ? "score_Container" : "score_Container-None"}`}>
          <div id="score_Container_child">
            <div id="score">Score : {score}</div>
            <div>
              <button id="Next_Level_button" 
              onClick={(e)=>GotoNext(e)}
              disabled={!isCorrect}
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
      <div id={`${currentIndex > DAta.length ? "FinalScoreOnly":"FinalScore"}`}> 
      <div id='FinalScoreChildren'>
     You Got :{score}
     </div>
      </div>
    </>
  );
};

export default InputFields;

