import React, { Component } from 'react';
import groomed from '../../assets/images/groomed.png'
import showered from '../../assets/images/showered.png'
import showeredGroomed from '../../assets/images/showered+groomed.png'
import './service-card.css'
import { ReactComponent as Done } from '../../assets/images/done.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class ServiceCard extends Component {

    deleteCard() {
        const index = this.props.index
        console.log(index)
        this.props.deleteCard(index)
    }



    render() {
        if (this.props.service == 'Shower') {
            this.service = showered
        }
        if (this.props.service == 'Groom') {
            this.service = groomed
        }
        if (this.props.service == 'Shower+Groom') {
            this.service = showeredGroomed
        }
        return (
            <div className="card">
                <div className='card__container-image'>
                    <img className='card__image' src={this.service} className='card__image' />
                </div>
                <h2 className="card__pet-name">{this.props.petName}</h2>
                <h3 className="card__human-name">{this.props.humanName}'s pet</h3>
                <p className="card__schedule-date">{this.props.scheduledDate}</p>
                <FontAwesomeIcon icon={faCheck} className='card__done' color='#76d259' size='2x' onClick={this.deleteCard.bind(this)}/>
            </div>
        );
    }
}

export default ServiceCard;
