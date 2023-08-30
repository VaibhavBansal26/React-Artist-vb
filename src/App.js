import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Artist from './components/Artist/Artist';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Switch>
     <Route path="/artist/:artistid" component={Artist}/>
     <Route path="/" component={Home}/>
      
    </Switch>
    </>
  );
}

export default App;
