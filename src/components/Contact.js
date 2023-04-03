 import { useState } from "react";
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

    
}