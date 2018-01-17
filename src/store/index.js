import {createStore} from 'redux';
import reducer from '../reducer';
// import { addCartData } from '../client/root';
const store = createStore(reducer);
// store.subscribe(addCartData);
export default store;