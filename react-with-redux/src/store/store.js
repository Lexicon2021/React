import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'; // *** handles async state management

export const store = createStore(reducers, {}, applyMiddleware(thunk));

