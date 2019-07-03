import React from 'react';
import Home from './pages/Home'
import Basket from './pages/Basket'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/basket/" component={Basket}/>
                {/*<Route path="/about/" component={Users} />*/}
            </Router>
        </div>
    );
}

export default App;
