import React from 'react';
import'../ImageButton/ImageButton.css'
import Image  from 'react-bootstrap/Image'

export class ImageButton extends React.Component {
    
    render() { 
        return ( 
            <button className="imageButton" onClick = {this.props.onClick}> <Image src ={this.props.src} alt ={this.props.alt}/></button>
         );
    }
}
 