import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ScheduleForm from './components/ScheduleForm/ScheduleForm';
import "./assets/app.css"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ScheduleForm />
      </>
    );
  }
}
export default App;
