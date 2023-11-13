import React, { Component, useState } from 'react'

export default class DataEntryForm extends React.Component {

    constructor(props) {
        super(props)

        this.provinces = ["--[Select One]--", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Saskatchewan"]
        this.state = {
            email: '',
            name: '',
            address: '',
            address_2: '',
            city: '',
            province: '',
            postalCode: ''
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState(this.state)
    }

    

    render= () => {
        return (
            <>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <div class="form-row">
                        <div class="form-row-element">
                            <p>Email</p>
                            <input type="text" 
                                   id="email" 
                                   name="email"
                                   onChange={event => this.onValueChanged(event)}
                                   placeholder="Enter Email"/>
                        </div>

                        <div class="form-row-element">
                            <p>Name</p>
                            <input type="text" 
                                   id="name" name="name" 
                                   onChange={event => this.onValueChanged(event)}
                                   placeholder="Enter Name"/>
                        </div>
                    </div>
                    <div class="form-row-element">
                        <p>Address</p>
                        <input type="text" 
                               id="address" 
                               name="address"
                               onChange={event => this.onValueChanged(event)} 
                               placeholder="1234 Main St"/>
                    </div>
                    <div class="form-row-element">
                        <p>Address 2</p>
                        <input type="text" 
                               id="address_2" 
                               name="address_2" 
                               onChange={event => this.onValueChanged(event)}
                               placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div class="form-row">

                        <div class="form-row-element">
                            <p>City</p>
                            <input type="text" 
                                   id="city" 
                                   name="city"
                                   onChange={event => this.onValueChanged(event)}/>
                        </div>
                        <div class="form-row-element">
                            <p>Province</p>
                            <select name='province' 
                                    onChange={(e) => this.onValueChanged(e)}>
                            {
                                this.provinces.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))
                            }
                            </select>
                        </div>
                        <div class="form-row-element">
                            <p>Postal Code</p>
                            <input type="text" 
                                   id="postalCode" 
                                   name="postalCode"
                                   onChange={event => this.onValueChanged(event)}/>
                        </div>
                    
                    </div>
                    <div class="form-row">
                        <label for="agree">I agree to the terms of service</label>
                        <input type="checkbox" 
                               name="agree"
                               onChange={event => this.onValueChanged(event)}/>
                    </div>
                    <div class="form-row">
                        <input 
                            id='btnSubmit'
                            name='btnSubmit'
                            type="submit"/>
                    </div>
                </form>
                <div>
                
            </div>
            </>
        );
    }
}