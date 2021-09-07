import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

import { HashRouter} from 'react-router-dom';
import Routes from './Routes';

import Logo from'../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';

const App = props =>

    <HashRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes />
            <Footer/>
        </div>
    </HashRouter>
    

export default App