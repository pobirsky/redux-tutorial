import {configureStore} from "@reduxjs/toolkit";
import reducer from './cashReducer'

const store = configureStore(reducer);

export default store;
