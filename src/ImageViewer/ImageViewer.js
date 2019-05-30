import React from 'react';
import '../ImageViewer/ImageViewer.css'
import { ImageButton } from '../ImageButton/ImageButton';

export class ImageViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     overlayVisable() {
        if(this.props.visable === true)
        {
            return "overlay show"
        }
        else
        {
            return "overlay"
        }   
    }
    
    render() { 
        return ( 
            <div className={this.overlayVisable()}>
                <ImageButton src={this.props.url}  onClick = {this.props.onClick} />
            </div>
         );
    }
}

 