import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form/Form';
// import App from './App';
import Project from './Project';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();