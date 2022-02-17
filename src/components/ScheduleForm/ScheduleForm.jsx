import React, { Component } from 'react';
import './schedule-form.css'

class ScheduleForm extends Component {

    render() {
        return (
            <form className='schedule-form'>
                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>Pet name</label>
                    <input type='text' placeholder='Pet name...' className='input' />
                </div>

                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>His/Her human</label>
                    <input type='text' placeholder='Human responsible for the pet...' className='input' />
                </div>

                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>Select service</label>
                    <select>
                        <option>Shower</option>
                        <option>Groom</option>
                        <option>Showe+Groom</option>
                    </select>
                </div>

                <div className='schedule-form__container'>
                    <label className='schedule-form__label'>Choose a date</label>
                    <input type="date"/>
                </div>

                <button className='button'>Confirm</button>
            </form>
        )
    }

}

export default ScheduleForm;