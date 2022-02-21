import React, { Component } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './service-list.css'
import sadDog from '../../assets/images/saddog.png'

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
            {this.props.servicesArray.length == 0 ? 
            <>
            <img src={sadDog} width='500px'/>
            <h1 className='service-list__message'>You don't have any service scheduled...</h1></> : console.log()}
        </ul>
        )
    }
}
 
export default ServiceList;