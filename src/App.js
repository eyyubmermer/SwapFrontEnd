import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Farm from './pages/Farm';
import Swap from './pages/Swap';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/farm' component={Farm} />
          <Route path='/swap' component={Swap} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
