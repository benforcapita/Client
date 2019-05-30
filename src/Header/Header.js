import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
   
    render() { 
        return ( 
            <Navbar className="webSiteNavBar" bg="dark" variant="dark">
            <Navbar.Brand href="#home">דור</Navbar.Brand>
          </Navbar>
       );
    }
}
 