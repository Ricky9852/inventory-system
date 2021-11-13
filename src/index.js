import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureState from './store/configureState.js'
// import { increment,decrement,reset,incrementBy,decrementBy } from './actions/countActions';
import { Provider } from 'react-redux';

const store=configureState()
console.log('State',store.getState())

store.subscribe(()=>{
  console.log('state updated', store.getState())
})

// store.dispatch(increment())

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));
