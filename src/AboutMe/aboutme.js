import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import second from '../Content/photos/second.jpeg'

const insideStyles = {
    background: "white",
    width: "200px",
    height:"200px",
    borderRadius:"100px",
    overflow: "hidden",
  };

  const colCenter={
    float: "none",
    margin: "0 auto",
    padding: "20px 0",
  }

export class AboutMe  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text:[]
          }
          this.componentDidMount = this.componentDidMount.bind(this);
          this.componentDidMount();
    }
    componentDidMount() {
      fetch('http://165.22.206.70:3001/aboutMe')
        .then(response => response.json())
        .then(data => this.setState({
          text:data["object"]["content"]
        }));
    }

    render() { 
        return ( 
<Container>
     <Row>
         <col-lg-2 style={colCenter}><img style={insideStyles} src ={second} alt="test" /></col-lg-2>
    </Row>
        <Row>
         <col-lg-2 style={colCenter}>{
           <div dangerouslySetInnerHTML={{ __html:this.state.text }} />
         }</col-lg-2>
        </Row>
</Container>
);
}
}
 