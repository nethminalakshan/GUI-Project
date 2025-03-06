import React from "react";
import "./contact.css";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log("Email:", email, "Message:", message);
    // Add logic to send data to an API or backend
  };

  return (
    <div>
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any inquiries or suggestions.</p>
      </header>

      <section className="contact-info">
        <div className="lefttocard">
        <div className="info-card1">
          <h2>Let's Get in Touch</h2>
          <p>We are open for any suggestions or just to have a chat.</p>
        </div>
        <div className="cardright">
        <div className="info-card">
          <h2>Our Address</h2>
          <p>
            DepotGo Pvt Ltd
            <br />
            No. 45, Main Street
            <br />
            Kandy, 20000
            <br />
            Sri Lanka
          </p>
        </div>
        <div className="info-card">
          <h2>Call Us</h2>
          <p>
            +94 71 234 5678
            <br />
            +94 77 987 6543
            <br />
            +94 75 112 2334
            <br />
            +94 76 556 7788
          </p>
        </div>
        <div className="info-card">
          <h2>Email Us</h2>
          <p>
            support@depotgo.lk
            <br />
            info@depotgo.lk
            <br />
            bookings@depotgo.lk
            <br />
            admin@depotgo.lk
          </p>
        </div>
        </div>
        </div>
      </section>

      
    </div>
    <div className="mapform">

    <section className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31657.86328393505!2d80.6177226671886!3d7.327716966413745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2045%2C%20Main%20Street%20Kandy%2C%2020000%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1741242519139!5m2!1sen!2slk"
          title="DepotGo Location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>


    </div>
    </div>
  );
};

export default ContactUs;