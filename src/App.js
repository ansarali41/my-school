import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
