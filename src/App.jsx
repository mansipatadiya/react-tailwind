// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from './components/LandingPage';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <LandingPage/>
    </Provider>
  );
}

export default App;
