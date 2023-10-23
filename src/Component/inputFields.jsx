import React, { useState, useEffect } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import {
  start_Quiz,
  Selecte_Option,
  Submit_Ans,
  Goto_Next,
  API_Data,
} from "../functionSlices/Slices";
import { useSelector } from "react-redux";
import { Data } from "./Ques/Ans";
const InputFields = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onlyscore, setOnlyScore] = useState();
  const [time,setTime]=useState(60)
  const [timeOver,setTimeOver]=useState();

  useEffect(() => {
    dispatch(API_Data(Data));
  }, []);
  const dispatch = useDispatch();
  const {
    start,
    changeButton,
    isCorrect,
    isWrong,
    score,
    questionNo,
    data,
    selectedOption,
  } = useSelector((state) => state.functions);
  const DisAble = useSelector((state) => state.functions.isDisable);
  let timer='';
  useEffect(()=>{
    if(timeOver===false){
      timer=setTimeout(()=>{
        setTime(time-1);
      },1000)
      }
  if(time===0){
    clearInterval(timer);
    setTimeOver(true)
  } 
 
},[time,timeOver])
  const startQuiz = () => {
    dispatch(start_Quiz(true));
    setTimeOver(false);
  };
  const containerStyle = timeOver ? { pointerEvents: 'none' } : {};
  const SelecteOption = (id) => {
    if (DisAble) {
      dispatch(Selecte_Option(id));
    }
  };
  const submitAns = (e) => {
    e.preventDefault();
    clearInterval(timer)
    setTimeOver(false);
    dispatch(Submit_Ans(data[currentIndex]?.answer));
  };
  const GotoNext = () => {
    dispatch(Goto_Next());
    setTimeOver(false)
    setTime(60);

    // console.log(time,'---')
 
    if (currentIndex >= 0 && currentIndex < data.length) {
      setCurrentIndex(currentIndex + 1);
    }
    if (questionNo === data.length) {
      setCurrentIndex(currentIndex + 1);
      setOnlyScore(currentIndex + 1);
    }
  };


  return (
    <>
      <header id="header">
        <h1> Quiz App </h1>
        <div id="score_in_header">
          <div className="header_button">Score:{score}</div>
          <div className="header_button" id="next_level">
            <button
              id="next_level"
              onClick={(e) => GotoNext(e)}
              disabled={!isCorrect}
            >
              Next Level
            </button>
          </div>
        </div>
      </header>
      <div
        id={`${
          onlyscore ? "AllNone" : start === true ? "Main" : "Main_Welcome_only"
        }`}
      >
        <div id={`${start === true ? "welcome_Msg" : "welcome_Msg-only"}`}>
          <h1>
            Welcome To
            <br />
            <span>Quiz App</span>
          </h1>
        </div>
        <div
          id={`${start === true ? "form-Container" : "form-Container-None"}`}
        >
          <form id="myForm">
            <h1>Quiz App</h1>
            <div id="Question">
              {" "}
              <div>Q:{questionNo})</div>
              {data && data[currentIndex]?.question}
            </div>
            <div 
            style={containerStyle}>
            <div
              className={`${
                isCorrect === 1
                  ? "BG_Green"
                  : selectedOption === 1
                  ? "Dull_Blue"
                  : "Answer"
              }`}
              id={`${isWrong === 1 ? "BG_Red" : "Answer"}`}
              onClick={() => SelecteOption(1)}
            >
              <div>a)</div>
              {data && data[currentIndex]?.options[0]}
            </div>
            <div
              className={`${
                isCorrect === 2
                  ? "BG_Green"
                  : selectedOption === 2
                  ? "Dull_Blue"
                  : "Answer"
              }`}
              id={`${isWrong === 2 ? "BG_Red" : "Answer"}`}
              onClick={() => SelecteOption(2)}
            >
              <div>b)</div>
              {data && data[currentIndex]?.options[1]}
            </div>
            <div
              className={`${
                isCorrect === 3
                  ? "BG_Green"
                  : selectedOption === 3
                  ? "Dull_Blue"
                  : "Answer"
              }`}
              id={`${isWrong === 3 ? "BG_Red" : "Answer"}`}
              onClick={() => SelecteOption(3)}
            >
              <div>c)</div>
              {data && data[currentIndex]?.options[2]}
            </div>
            <div
              className={`${
                isCorrect === 4
                  ? "BG_Green"
                  : selectedOption === 4
                  ? "Dull_Blue"
                  : "Answer"
              }`}
              id={`${isWrong === 4 ? "BG_Red" : "Answer"}`}
              onClick={() => SelecteOption(4)}
            >
              {" "}
              <div>d)</div>
              {data && data[currentIndex]?.options[3]}
            </div>
            </div>


            <div
              id={`${
                start === true
                  ? "submit_btn-container"
                  : "submit_btn-container-only"
              }`}
            >
              { timeOver ?  (
                <button
                  id="submit"
                  className="submit_btn"
                  onClick={(e) => GotoNext(e)}
                  disabled={selectedOption}
                >
                  Next
                </button>
              ) : 
              changeButton ? (
                <button
                  id="submit"
                  className="submit_btn"
                  onClick={(e) => GotoNext(e)}
                  disabled={!selectedOption}
                >
                  Next
                </button>
              ) : !changeButton ? (
                <button
                  id="submit"
                  className="submit_btn"
                  onClick={(e) => {
                    submitAns(e);
                  }}
                  disabled={!selectedOption}
                >
                  Check
                </button>
              ) : (
                ""
                )}
                </div>
            <div id="Time" >Time:{time}</div>
          </form>
        </div>
        <div
          id={`${start === true ? "score_Container" : "score_Container-None"}`}
        >
          <div id="score_Container_child">
            <div id="score">Score : {score}</div>
          </div>
        </div>
        <div
          id={`${start === true ? "start_Container-None" : "start_Container"}`}
        >
          {" "}
          <button onClick={startQuiz}>Start</button>
        </div>
      </div>
      <div
        id={`${currentIndex === data.length ? "FinalScoreOnly" : "FinalScore"}`}
      >
        <div id="FinalScoreChildren">You Got :{score} Score</div>
      </div>
    </>
  );
};

export default InputFields;