import {combineReducers} from 'redux';
import { ADD,ADD1,ADD2 } from '../action';
const initialState = {
    listData:["列表一","列表二","列表三"],
    cartData:["1","2","3"]
};
const listReducer = (state = initialState,action)=>{
    state = JSON.parse(JSON.stringify(state));//深拷贝
    switch (action.type){
        case ADD:
            state.listData.push(action.payload);
            return {listData:state.listData};
        default:
            return state;
    }
};
const cartReducer = (state = initialState,action)=>{
    state = JSON.parse(JSON.stringify(state));//深拷贝
    switch (action.type){
        case ADD1:
            //console.log(state);
            state.cartData.push("2");
            // return {cartData:state.cartData};
            return Object.assign({}, state, { cartData:state.cartData });
        case ADD2:
            //console.log(state);
            state.cartData.push("你妹");
            return Object.assign({}, state, { cartData:state.cartData });
            //return {cartData:state.cartData};
        default:
            return state;
    }
};

const reducer = combineReducers({ 
    cartReducer,
    listReducer
});

export default reducer;