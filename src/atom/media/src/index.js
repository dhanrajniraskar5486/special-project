import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import About from './about';
import Contact from './contact';
import Login from './login';
import SignUp from './signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  // http://localhost:3001/ -/>  "/"
  {
    path: "/",
    element: <App/>
  },
  // // http://localhost:3001/login -/> '/login'
  {
    path : '/home' ,
    element : <Home/>
  },
  {
    path : '/about' ,
    element : <About/>
  },
  {
    path : '/contact' ,
    element : <Contact/>
  },
  {
    path : '/login' ,
    element : <Login/>
  },
  {
    path : '/signup' ,
    element : <SignUp/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
