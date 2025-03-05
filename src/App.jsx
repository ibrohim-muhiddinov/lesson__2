
import Header from "./assets/logo.png";
import Hero from "./assets/illustration.png";
import Clients from "./assets/clients-logos.png";
import Features from "./assets/icon1.png";
import Features2 from "./assets/icon2.png";
import Features3 from "./assets/icon3.png";
import Footer from "./assets/frame35.png";
import "./App.css";

function App() {
  return (
    <div className="container">
    
    <header className="navbar">
      <img src={Header} alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </nav>
      <button className="btn2">Register Now</button>
    </header>

    <div className="hero">
 `    <img src={Hero} alt="Hero Illustration" className="hero-img" />
     <div className="row2">
     <h1>Lessons and insights <span>from 8 years</span></h1>
      <p>Want to grow your business as a photographer, or on social media?</p>
      <button className="btn2">Register</button>
     </div>
    </div>


    <div className="clients">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <img src={Clients} alt="Clients Logos" className="clients-img" />
    </div>


    <div className="features">
      <h2>Manage your entire community in a single system</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <img src={Features} alt="Membership" />
          <h3>Membership Organisations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments.</p>
        </div>

        <div className="feature-card">
          <img src={Features2} alt="National Associations" />
          <h3>National Associations</h3>
          <p>Our membership management software provides full automation of membership renewals and payments.</p>
        </div>

        <div className="feature-card">
          <img src={Features3} alt="Clubs" />
          <h3>Clubs And Groups</h3>
          <p>Our membership management software provides full automation of membership renewals and payments.</p>
        </div>
      </div>
    </div>


    <section className="cta">
      <div className="footer-row2">
      <h2>The unseen of spending three years at Pixelgrade</h2>
      <p className="footer-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      <button className="btn">Learn More</button>
      </div>
      <img src={Footer} alt="CTA Illustration" className="cta-img" />
    </section>

    </div>
  );
}

export default App;














































































