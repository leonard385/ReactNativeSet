/**
 * Created by niwanglong on 2017/2/16.
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducers/rootReducer';

let createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleWare(RootReducer);
export default store;