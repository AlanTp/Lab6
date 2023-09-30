import React from "react";
import { createBrowserRouter} from 'react-router-dom';
import Home from './Home';
import Contato from './Contato';


const Rotas = createBrowserRouter([
    {
        path:'/',
        element: <Home />,
    },
    {
        path:'/Contato',
        element: <Contato />,
    },
]);

export default Rotas;