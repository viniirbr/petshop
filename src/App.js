import { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './index.css';
import "./assets/app.css"
import Header from './components/Header/Header';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      scheduledServices: []
    }
  }

  addScheduledService(petName, humanName, service, scheduledDate) {
    const newService = {petName, humanName, service, scheduledDate};
    console.log(newService)
    const newServicesArray = [...this.state.scheduledServices, newService];
    const newState = {
      scheduledServices: newServicesArray
    }
    this.setState(newState)
  }

  deleteCard(index) {
    let scheduledServicesarray = this.state.scheduledServices
    scheduledServicesarray.splice(index,1)
    this.setState({
      scheduledServices: scheduledServicesarray
    })
    console.log(this.state.scheduledServices)
  }
  
  
  render() {
    return (
        <Router>
          <Header servicesCount={this.state.scheduledServices.length}/>
          <Switch>
            <Route exact path="/">
              <SchedulePage addScheduledServiceFunction = {this.addScheduledService.bind(this)}/>
            </Route>
            <Route exact path="/services">
              <ServicesPage servicesArray={this.state.scheduledServices} deleteCard={this.deleteCard.bind(this)}/>
            </Route>
          </Switch>
        </Router>
    );
  }
}
export default App;
