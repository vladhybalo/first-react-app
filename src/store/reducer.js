import {combineReducers} from "redux";
import productsReducer from './productsReducer';
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
    productsReducer,
    basketReducer,
});

export default rootReducer;
