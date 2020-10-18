import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Components
import Navbar from "./layouts/Navbar";
import Homepage from './pages/Homepage';
import Components from './pages/Components';
import Sidebar from './layouts/Sidebar';
import EntityIndex from './components/entities/Index';

const store = configureStore();

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <div className="main">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/page/components" component={Components} />
                <Route path="/entities/:entity" component={EntityIndex} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
