import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Message.css';
import { useHistory } from 'react-router-dom';

function Message({ emailid }) {

    // const [name, setName] = useState("");
    // const [message, setMessage] = useState("");
    const history = useHistory();

    function signIn(e) {
        console.log(e.target)
        emailjs.sendForm('gmail', 'offer1_template', e.target ,'user_8AM7WCLY2GhBSh3vq0gtR')
            .then((res) => {
                console.log(res.text)
            }, (error) => {
                console.log(error.text)
            })
        e.target.reset()
        history.push('/property')
    }

    return (
        <div className="message">
            <div className="message__form">
                <h2>Send Message to Agent</h2>
                <form onSubmit={signIn}>
                    <h5>Your Name</h5>
                    <input
                        type="text"
                        name = "name" 
                    />
                    <h5>Your E-mail Id</h5>
                    <input
                        type="textarea"
                        name="email__user"
                        placeholder="Please enter your e-mail"
                        // onChange= {e => setPassword(e.target.value)}
                    />
                    <h5>Best Time to Contact You</h5>
                    <input
                        type="textarea"
                        name="time"
                        placeholder="Enter Few Available Times"
                        // onChange= {e => setPassword(e.target.value)}
                    />
                    <h5>Message</h5>
                    <input
                        type="textarea"
                        name="message"
                        placeholder="Enter your message"
                        // onChange= {e => setPassword(e.target.value)}
                    />

                    <button className="login__signInButton" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Message
