import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./layouts/Navbar";
import Homepage from './pages/Homepage';
import Components from './pages/Components';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/components" component={Components} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
