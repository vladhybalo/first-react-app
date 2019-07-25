import {combineReducers} from "redux";
import productsReducer from './productsReducer';
import basketReducer from './basketProductsReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    basketProducts: basketReducer,
});

export default rootReducer;
