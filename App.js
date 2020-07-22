import React from 'react';
import Index from './index'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));
// import { SplashScreen } from 'expo';
// SplashScreen.preventAutoHide();
// setTimeout(SplashScreen.hide, 5000);
export default function App(){
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
}

