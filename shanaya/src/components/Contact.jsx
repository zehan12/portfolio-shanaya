import { BsTwitter, BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillContacts } from "react-icons/ai";


const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-section-header">
                <h2>Reach out To me </h2>
                <p>on any of the following contact mediums</p>
            </div>
            <div className="contact-links">
                <a href="https://www.facebook.com/Sanaya Arya/" target="_blank" className="btn contact-details"><BsTwitter color="#3b5998" /></a>
                <a id="profile-link" href="https://github.com/sanayaarya" target="_blank" className="btn contact-details">

                    <BsGithub />

                </a>
                <a href="https://twitter.com/sanayaarya" target="_blank" className="btn contact-details">
                    <BsTwitter color="#00acee" /> </a>

                <a href="mailto:sanayaarya@0123@gmail.com" className="btn contact-details"> <AiFillContacts color="cornflowerblue;" /></a>
            </div>
        </section >
    )
}

export default Contact;