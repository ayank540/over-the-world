import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import countries from './countryDetails'

export default class Country extends Component {
    render() {        
        return (
            <div className="country-dropdown">
            {countries.map((country)=><NavDropdown.Item><Link to={"/"+country.code}>{country.name}</Link></NavDropdown.Item>)}
                
             </div>
        )
    }
}
