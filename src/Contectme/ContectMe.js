import React from 'react'
import './ConectMe.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'

export class ContectMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          localizationText :[]
         }
         this.sendEmail = this.sendEmail.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
         this.componentDidMount();
    }
    componentDidMount() {
      fetch('http://165.22.206.70:3001/contectMeData')
        .then(response => response.json())
        .then(data => this.setState({ 
          localizationText:data
          }));
    }

     sendEmail() {
      let inputName = document.getElementById('nameInput').value
      let inoutPhone = document.getElementById('formPhoneNumber').value
      let inputhowDidYouHeardAboutMe = document.getElementById('howDidYouHeardAboutMe').value
      let url= "http://165.22.206.70:3001/sendEmails??name="+inputName+"&Phone="+inoutPhone+"&how="+inputhowDidYouHeardAboutMe;
      fetch(url)
    }
     inputStyleName =
    {
       textAlign:(navigator.language==="he")?"right":"left"
     }
     inputStyleNumber = 
     {
      textAlign:(navigator.language==="he")?"right":"left"
     }

    render() { 
        return ( 
            <div className="ContectSection"> 
            <h1>{this.state.localizationText["contectme"]}</h1>
       <Form className='ContectMeForm'> 
         <FormGroup controlId="nameInput">
         <FormLabel>{this.state.localizationText["name"]}</FormLabel>
        <FormControl type="Name" placeholder={this.state.localizationText["enter_your_name"]} style={this.inputStyleName} />
         </FormGroup>
         <FormGroup controlId="formPhoneNumber">
        <FormLabel>{this.state.localizationText["phone_number"]}</FormLabel>
         <Form.Control type="number" placeholder={this.state.localizationText["enter_your_phone_number"]} style ={this.inputStyleNumber}/>
        </FormGroup>
        <FormLabel>{this.state.localizationText["how_did_you_heard_about_me"]}</FormLabel>
        <FormGroup controlId="howDidYouHeardAboutMe" >
        <FormControl as="select" dir={this.state.localizationText["optiondir"]}>
        <option>1</option>
         <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </FormControl>
        </FormGroup>
        <Button variant="primary" type="button" onClick={this.sendEmail} >
        {this.state.localizationText["submit"]}
        </Button>
       </Form>
       </div>
         );
    }
}