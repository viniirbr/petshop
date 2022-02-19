import { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import "./assets/app.css"
import Header from './components/Header/Header';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <SchedulePage />
            </Route>
            <Route exact path="/services">
              <ServicesPage />
            </Route>
          </Switch>
        </Router>
    );
  }
}
export default App;
