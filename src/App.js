import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/Auth'
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <PrivateRoute exact path='/' component={ Home } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/signup' component={ SignUp } />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;