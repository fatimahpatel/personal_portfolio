 import { useState } from "react";
 import { Container, Row, Col } from "react-bootstrap";
 import contactImg from "../assets/img/contact-img.svg"
export const Contact = () => {

    
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    //need states to store fields for contact and reset it later on 
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    //submit button initially set to 'send'
    //when user presses send, it would update to 'sending'
    const [buttonText, setButtonText] = useState('Send');
    //status is for when we make the api call afterwards, whether or not we get error message or message has been sent successfully
    const[status, setStatus] = useState({});

    //creating a new function to update the formDetails state
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}