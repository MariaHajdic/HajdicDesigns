import "./styles.css"
import backgroundImage from "./background.jpg"
import ContactForm from "./ContactForm.tsx"

const LandingPage = () => {
    return (
        <section className="landing-page">
            <img src={backgroundImage} alt="Background" className="background-image" loading="lazy" />
            <div className="gradient-overlay"></div> 
            
            <ContactForm />
        </section>
    )
}

export default LandingPage

// Photo by <a href="https://unsplash.com/@bmeliti?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brett Meliti</a> on <a href="https://unsplash.com/photos/an-aerial-view-of-a-yellow-and-brown-substance-fqUzySS5sTg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>