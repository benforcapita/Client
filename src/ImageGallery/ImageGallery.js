import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './ImageGallery.css'
import {ImageButton} from '../ImageButton/ImageButton'
import {ImageViewer} from '../ImageViewer/ImageViewer'


export class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            photoSrc: "",
            photos: []
          };
          this.selectPhoto = this.selectPhoto.bind(this);
          this.componentDidMount()
         
    }
    
    getPhotos()
    {   
        let Images = []
    for (let i = 0; i < this.state.photos.length; i++) {
       Images.push(
       <Col lg ={(3)} md={(4)} sm ={(6)} xs ={(12)}>
        <ImageButton  src = {this.state.photos[i]["url"]} alt ="test "
        onClick = {()=>{this.selectPhoto(this.state.photos[i]["url"])}}
        />
       </Col>
       )
        }
        return Images;
    }
    componentDidMount() {
        fetch('http://165.22.206.70:3001/images')
          .then(response => response.json())
          .then(data => this.setState({ 
              photos:data["media"]
            }));
      }

    selectPhoto(obj) {
        this.setState({
            visible: !this.state.visible,
            photoSrc: (obj!==undefined)?obj : "",
          });
      };

    render() { 
        return ( 
            <div className="GalleyContainer">
            <ImageViewer url ={this.state.photoSrc} visable ={this.state.visible} onClick = {()=>{this.selectPhoto(undefined)}}/>
            <div className="ImageContainer">
            <Container>
            <Row> 
            {(this.getPhotos())}
            </Row>
            </Container>
         </div>
        </div>
        );
    }
}

