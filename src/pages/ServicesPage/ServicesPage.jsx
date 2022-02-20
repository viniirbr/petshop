import React, { Component } from 'react';
import ServiceList from '../../components/ServicesList/ServiceList';

class ServicesPage extends Component {
    render() {
        console.log(this.props.servicesArray)
        return (
            
            <ServiceList servicesArray={this.props.servicesArray} deleteCard={this.props.deleteCard}/>
        );
    }
}

export default ServicesPage;