import React, { Component } from 'react';
import ScheduleForm from '../../components/ScheduleForm/ScheduleForm';

class SchedulePage extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <ScheduleForm addScheduledServiceFunction={this.props.addScheduledServiceFunction}/>
        );
    }
}
 
export default SchedulePage;