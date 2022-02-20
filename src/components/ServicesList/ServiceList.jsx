import React, { Component } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './service-list.css'

class ServiceList extends Component {
    
    constructor() {
        super()
    }
    

    render() { 
        return(
        <ul className='service-list'>
            {this.props.servicesArray.map((serviceInfo, index) => {
                return(
                    <ServiceCard 
                    petName={serviceInfo.petName} 
                    humanName={serviceInfo.humanName} 
                    service={serviceInfo.service}
                    scheduledDate={serviceInfo.scheduledDate}
                    index={index}
                    deleteCard={this.props.deleteCard}/>
                )
            })}
        </ul>
        )
    }
}
 
export default ServiceList;