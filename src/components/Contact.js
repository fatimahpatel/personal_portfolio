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

    
}