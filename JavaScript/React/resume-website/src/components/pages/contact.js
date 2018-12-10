import React from 'react';
import { Link } from 'react-router-dom';
import { MenuImageButton, AboutButton, ResumeButton, ProjectsButton, ContactButton } from "../ui/Menu";
import { Footer } from "../ui/Footer"

const Contact = () => (
    <div className="grid">
        <div className="menu-left">
            <AboutButton />
            <ResumeButton />
        </div>
        <div className="menu-image">
            <MenuImageButton />
        </div>
        <div className="menu-right">
            <ProjectsButton />
            <ContactButton />
        </div>
        <div className="contact">
            <form className="contact-form">
                <h1>Contact Me !</h1>
                <div className="form-left">
                    <input placeholder="Your Name" type="text" required />
                    <input placeholder="Email address" type="email" onBlur="this.setAttribute('value', this.value);" required />
                    <input placeholder="Skype" onBlur="this.setAttribute('value', this.value);" />
                    <input placeholder="Topic" onBlur="this.setAttribute('value', this.value);" required />
                </div>
                <div className="form-right">
                    <textarea placeholder="Message" onBlur="this.setAttribute('value', this.value);" rows="1" required></textarea>
                </div>
                <button className="send" >Send</button>
            </form>
        </div>
        <Footer className='footer' />
    </div>
);

export default Contact;