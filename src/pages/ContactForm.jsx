import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import styles from '../css/ContactForm.module.css';

const ContactForm = () => {

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Send');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
          setFormDetails({
            ...formDetails,
            [category]: value
          })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
      };

    return (

            <><div className={styles.headingContainer}>
            Contact Us
        </div><div className={styles.contactForm}>
                <form id='contact-form' onSubmit={handleSubmit}>
                    {/* Row 1 of form */}
                    <div className={styles.formRow}>
                        <div className={styles['col-6']}>
                            <input
                                type='text'
                                name='name'
                                className={styles.customBackgroundColor}
                                value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </div>


                        <div className={styles['col-6']}>
                            <input
                                type='text'
                                name='lastname'
                                className={styles.customBackgroundColor}
                                value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                                />
                        </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className={styles.formRow}>
                        <div className={styles['col-6']}>
                            <input
                                type='email'
                                name='email'
                                className={styles.customBackgroundColor}
                                value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </div>
                        <div className={styles['col-6']}>
                            <input
                                type='tel'
                                name='phoneNumber'
                                className={styles.customBackgroundColor}
                                value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </div>
                    </div>

                    {/* Row 3 of form */}
                    <div className={styles.formRow}>
                        <div className={styles['col-12']}>
                            <textarea
                                rows={3}
                                name='message'
                                className={styles.customBackgroundColor}
                                value={formDetails.message} placeholder="Type Your Message Here" onChange={(e) => onFormUpdate('message', e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.submitBtnContainer}>
                        <button className={styles.submitBtn} type="submit">
                            Submit
                        </button>
                    </div>

                </form>
            </div></>
        
    );
};

export default ContactForm;

