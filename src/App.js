import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Help } from './screens';
import { Header, SideTab } from './components'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideTab/>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/help" component={Help}/>
        </Router>
      </div>
    );
  }
}

export default App;
