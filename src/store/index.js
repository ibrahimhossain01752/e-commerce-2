import {createStore, combineReducers} from 'redux';
import ProductReducer from './reducer/ProductReducer';
const root = combineReducers({

    ProductReducer

});

const store = createStore(root);
export default store;
