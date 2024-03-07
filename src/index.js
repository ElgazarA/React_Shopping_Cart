import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import App from './App';
//react router
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Root from './routes/Root';
import LogIn from './components/logIn/LogIn';
import ErrorPage from './routes/ErrorPage';
import Register from './components/register/Register';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:'/login',
        element: <LogIn />,
    },
    {
        path:'/register',
        element: <Register/>,
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
);
