import { AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs"

const Welcome = () => {
    return (
        <section id="welcome-section" class="welcome-section">
            <div class="profile-img-container">
                <img src="https://i.postimg.cc/Dzm8Tt6S/images.jpg" alt="Sanaya arya" class="profile-img" />

                <div class="contact-links profile-links">

                    <a id="profile-link" href="https://github.com/sanayaarya" target="_blank" class="btn contact-details">
                        <AiFillGithub /></a>
                    <a href="https://twitter.com/sanayaarya" target="_blank" class="btn contact-details">
                        <BsTwitter color={"#00acee"} />
                    </a>

                </div>
            </div>
            <div class="about-info">
                <h1 class="text animation"> Hey I am sanaya 👋</h1>
                <p class="text2 animation2">frontend Developer 💻 </p>
                <p class="text2 animation3">Explorer of the World & Technologies 🌏 👨‍💻</p>
                <div class="description">
                    <p>
                        I love creating functional web apps with design.
                    </p>
                    <p>My current tech stack is frontend developer(html , css , advance css , javascript , advance javascript ,
                        React js).</p>
                    <p>Let's Work Together! 🙌</p>
                    <a href="#contact" class="btn contact-btn">Contact</a>
                </div>

            </div>
        </section>

    )
}

export default Welcome;