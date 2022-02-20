import React, { Component } from 'react';
import './schedule-form.css'
import moment from 'moment'


class ScheduleForm extends Component {

    constructor() {
        super();
        this.petName = "";
        this.humanName = "";
        this.service = "Shower";
        this.scheduleDate = new moment().format("YYYY-MM-DD");
    }

    changePetName(event) {
        this.petName = event.target.value;
        this.setState({
            petName: this.petName
        })
    }

    changeHumanName(event) {
        this.humanName = event.target.value;
        this.setState({
            humanName: this.humanName
        })
    }

    changeService(event) {
        this.service = event.target.value;
        console.log(event.target.value);
        this.setState({
            service: this.service
        })
    }

    changeDate(event) {
        this.scheduleDate = event.target.value;
        this.setState({
            scheduleDate: this.scheduleDate
        })
    }

    addService(event) {
        event.preventDefault()
        this.props.addScheduledServiceFunction(this.petName, this.humanName, this.service, this.scheduleDate.toString())
        // this.petName = "";
        // this.humanName = "";
        // this.sevice = "Shower";
        // this.scheduleDate = new moment().format("YYYY-MM-DD");
    }

    // alertClick(event) {
    //     event.preventDefault()
    //     const info = {
    //         petName: this.petName,
    //         humanName: this.humanName,
    //         service: this.service,
    //         shceduleDate: this.scheduleDate
    //     }
    //     console.log(info);
    //     this.petName = "";
    //     this.humanName = "";
    //     this.service = "";
    //     this.scheduleDate = new moment().format("YYYY-MM-DD");
    //     this.setState(info)
    // }

    render() {
        return (
            <form className='schedule-form' onSubmit={this.addService.bind(this)}> 
                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>Pet name</label>
                    <input
                        type='text'
                        placeholder='Pet name...'
                        className='input'
                        value={this.petName}
                        onChange={this.changePetName.bind(this)} />
                </div>

                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>His/Her human</label>
                    <input 
                    type='text' 
                    placeholder='Human responsible for the pet...' 
                    className='input'
                    value={this.humanName}
                    onChange={this.changeHumanName.bind(this)} />
                </div>

                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>Select service</label>
                    <select value={this.service} onChange={this.changeService.bind(this)}>
                        <option value="Shower">Shower</option>
                        <option value="Groom">Groom</option>
                        <option value="Shower+Groom">Shower+Groom</option>
                    </select>
                </div>

                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>Choose a date</label>
                    <input type="date" value={this.scheduleDate} onChange={this.changeDate.bind(this)}/>
                </div>

                <button className='button' type='submit'>Confirm</button>
            </form>
        )
    }

}

export default ScheduleForm;