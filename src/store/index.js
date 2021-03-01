import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer';
//vamos criar o usuarioReducer
const store = createStore(usuarioReducer);

export default store;