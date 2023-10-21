import {configureStore} from '@reduxjs/toolkit';
import Slices from '../functionSlices/Slices';


const store=configureStore({
    reducer:{
        functions:Slices.reducer,
    }
});

export default store;