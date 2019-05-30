import React from "react";
import { Parallax } from "react-parallax";

const Style = {
    color : "white",
    fontFamily : "Roboto, sans-serif,",
    textShadow : "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
    fontSize: "3em,",
    textAlign : "center",
    height: "50%",
    width :  "100%",
    position : "absolute",
    bottom: "0"
};

  export class ImageParallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text:[] }
          this.componentDidMount = this.componentDidMount.bind(this);
          this.componentDidMount();
    }

    componentDidMount() {
    if(this.props.title===true)
     {
      fetch('http://165.22.206.70:3001/title')
        .then(response => response.json())
        .then(data => this.setState({ 
            text:data
          }));
      }
    }

    render() { 
        return ( 
        <Parallax bgImage={this.props.url} blur={{ min: -1, max: 3 }} >
         <div style={{ height: 500 }}>
          <h1 style={Style} dangerouslySetInnerHTML={{ __html:this.state.text}}></h1>
         </div> 
          </Parallax> );
    }
  }

