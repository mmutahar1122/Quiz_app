import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState={
    isCorrect:'',
    isWrong:'',
    start:false,
   currentIndex:0,
   score:0,
   selectedOption:'',
   changeButton:false,
   isDisable:(true),
   questionNo:1,
   correct_Answer:'',
   data:[],
   Time:'',
}
const Slices = createSlice({
    name:'functions',
    initialState,
        reducers:{
            start_Quiz(state,action){
                state.start=true;
                console.log(action.payload);
            },
            Selecte_Option(state,action){
                state.selectedOption= action.payload;
            },
            Submit_Ans(state,action){
                state.correct_Answer=action.payload
                state.changeButton=true;
                state.isDisable=false;
                // console.log('state.correct_Answer',state.correct_Answer);
                if(state.correct_Answer === state.selectedOption){
                    state.isCorrect = state.correct_Answer;
                    state.score= state.score+5;
                } if(state.correct_Answer !== state.selectedOption){
                    state.isWrong = state.selectedOption;
                    state.isCorrect=state.correct_Answer;
                }
            },
            Goto_Next(state,action){
                state.changeButton=false;
                state.isDisable=true;
                state.isCorrect='';
                state.isWrong='';
                state.selectedOption='';
                state.questionNo=state.questionNo+1;
                
            },
            API_Data(state,action){
                state.data=action.payload;
            },
         
        }
})


export default Slices;
export const {start_Quiz,Selecte_Option,Submit_Ans,Goto_Next,API_Data}=Slices.actions;






