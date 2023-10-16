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
  const [ApiData,setApiData]=useState()
  const [randomNum,setRandumNum]=useState();

  const GEnerateRAndumNum=()=>{
    const Random=Math.floor(Math.random()*4 + 1);
    setRandumNum(Random);

  }

// console.log('randomNum',randomNum);
// console.log('selectedOption.value',selectedOption?.value);
// console.log('isWrong',isWrong);
console.log('isCorrect',isCorrect);
const correctAnswer=ApiData && ApiData[0]?.correct_answer;
console.log("correctAnswer",correctAnswer);
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
}, [currentIndex]);
  const submitAns=(e)=>{
    e.preventDefault();
    setSelectedOption('');
    if(ApiData &&  ApiData[0]?.correct_answer !== selectedOption.value){
      // console.log('correct_answer',ApiData &&  ApiData[0]?.correct_answer);
      setIsWrong(selectedOption);
    }if(ApiData &&  ApiData[0]?.correct_answer === selectedOption.value){
      setIsCorrect(ApiData && ApiData[0]?.correct_answer);
      setScore(score + 5);
    }
    setChangeButton(true);
    setIsDisable(false)
    setIsCorrect({correctAnswer,randomNum});

    // console.log('id',selectedOption?.id)
    // console.log('selectedOption',selectedOption);
    // console.log('correct_answer',ApiData && ApiData[0]?.correct_answer);
    // console.log('iscorrect',isCorrect);
    console.log('Random-submit',randomNum);

  }
  const startQuiz = () => {
    setStart(!start);
    const CurrentDAta=Data[currentIndex];
    // setFilterData(CurrentDAta);/
    // setRandumNum(Random);
    GEnerateRAndumNum();
    console.log('Random-start',randomNum);

  };
  const SelecteOption = (value,id) => {
    console.log('Random-change',randomNum);
  if(isDisable){
    setSelectedOption({value,id});

  };};
  const GotoNext=()=>{
  if(currentIndex >= 0 && currentIndex < 20){
    const CurrentDAta=Data[currentIndex];
    // setFilterData(CurrentDAta);
    setCurrentIndex(currentIndex + 1);
    setIsWrong('');
    setIsCorrect('');
    GEnerateRAndumNum();
  }
  if(currentIndex === 10){
    setCurrentIndex(currentIndex + 1) ;
    setOnlyScore(currentIndex + 1)
  }
  setChangeButton(false)
  setIsDisable(true)
    console.log('Random-next',randomNum);


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
            <br/><span>Quiz App</span>
          </h1>
        </div>
        <div id={`${start ? "form-Container" : "form-Container-None"}`}>
          <form id="myForm">
            <h1>Quiz App</h1>
            <div id="Question">
              {" "}
              <div>Q:{currentIndex&&currentIndex})</div>
               {ApiData && ApiData[0]?.question}
            </div>
             <div 
             className={`${isCorrect?.randomNum===1 ? 'BG_Green' : selectedOption?.id === 1
              ? 'Dull_Blue':'Answer'}`}  
             id={`${isWrong?.id === 1 ? 'BG_Red' : 'Answer'}`} 
              onClick={() => SelecteOption(randomNum === 1 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0]?.incorrect_answers[0],1)}>
              <div>a)</div>{randomNum === 1 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0]?.incorrect_answers[0]}
            </div>
            <div 
            className={`${isCorrect?.randomNum ===2 ? 'BG_Green': selectedOption?.id === 2 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong?.id === 2 ? 'BG_Red' : 'Answer'}`}
            onClick={() => SelecteOption(randomNum === 2 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0]?.incorrect_answers[1],2)}>
              <div>b)</div>{ randomNum === 2 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0]?.incorrect_answers[1]}
            </div>
            <div 
            className={`${isCorrect?.randomNum === 3 ? 'BG_Green': selectedOption?.id === 3 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong?.id === 3 ? 'BG_Red' : 'Answer'}`} 
            onClick={() => SelecteOption(randomNum === 3 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0] ?.incorrect_answers[2],3)}>
              <div>c)</div>{randomNum === 3 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0] ?.incorrect_answers[2]}
            </div>
            <div 
            className={`${isCorrect?.randomNum === 4 ? 'BG_Green': selectedOption?.id === 4 ? 'Dull_Blue': 'Answer'}`} 
            id={`${isWrong?.id === 4 ? 'BG_Red' : 'Answer'}`} 
            onClick={() => SelecteOption(randomNum === 4 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0] ?.incorrect_answers[0],4)}>
              {" "}
              <div>d)</div>{randomNum === 4 ? ApiData && ApiData[0]?.correct_answer : ApiData && ApiData[0] ?.incorrect_answers[0]}
            </div>
            <div
              id={`${
                start ? "submit_btn-container" : "submit_btn-container-only"
              }`}
            >
              {changeButton ? <button 
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
            {/* <div>
              <button id="Next_Level_button" 
              onClick={(e)=>GotoNext(e)}
              disabled={!isCorrect}
              >
                Next
              </button>
            </div> */}
          </div>
        </div>
        <div
          id={`${start ? "start_Container-None" : "start_Container"}`}
        >
          {" "}
          <button onClick={startQuiz}>Start</button>
        </div>
      </div>
      <div id={`${currentIndex > 10 ? "FinalScoreOnly":"FinalScore"}`}> 
      <div id='FinalScoreChildren'>
     You Got :{score} Score
     </div>
      </div>
      
    </>
  );
};

export default InputFields;

