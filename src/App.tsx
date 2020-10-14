import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TrendingPage from './pages/TrendingPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <TrendingPage />
            </Route>
            <Route exact path="/details">
              <DetailPage />
            </Route>
          </Switch>
        </div>
      </div>
      <hr />
      <ul>
        <li>
          <Link to="/">Trending Page</Link>
        </li>
        <li>
          <Link to="/details">Detail Page</Link>
        </li>
      </ul>
    </Router>
  );
}

export default App;
