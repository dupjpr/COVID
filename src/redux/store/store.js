import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';


const initialState = {
  loading: false,
  data:'',

}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
