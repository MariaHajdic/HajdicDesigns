import "./styles.css"
import backgroundImage from "./background.jpg"

const LandingPage = () => {
    return (
        <section className="landing-page">
            <img src={backgroundImage} alt="Background" className="background-image" loading="lazy" />
            <div className="gradient-overlay"></div> 
            
            <div className="contact-form">
                <h2 className="landing-text">Now Accepting New Projects</h2>
                <form action="https://formsubmit.co/connect@hajdicdesigns.co.uk" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default LandingPage

// Photo by <a href="https://unsplash.com/@bmeliti?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brett Meliti</a> on <a href="https://unsplash.com/photos/an-aerial-view-of-a-yellow-and-brown-substance-fqUzySS5sTg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>