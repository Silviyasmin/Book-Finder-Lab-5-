import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./components/NavBar";
import BookDetails from "./components/BookDetails";
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

