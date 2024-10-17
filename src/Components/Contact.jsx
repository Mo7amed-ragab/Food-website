import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/Contact.css";
const Contact = () => {
  return (
    <>
      <section className="book">
        <div className="title-book">
          <h1>Contact Us</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="form-book">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label for="inputtext4" className="form-label">
                  Name
                </label>
                <input
                  placeholder="Enter your Name"
                  type="text"
                  className="form-control"
                  id="inputtext4"
                />
              </div>
              <div className="col-md-6 ">
                <label for="inputemail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputemail4"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            <div className="row">
              <label for="inputtext4" className="form-label">
                Subject
              </label>
              <input
                placeholder="Write a subject"
                type="text"
                className="form-control"
                id="inputtext4"
              />
            </div>
            <div className="row">
              <label for="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
                placeholder="Write a Message"
                type="text"
                className="form-control"
                id="inputtext4"
              />
            </div>
            <button type="submit" className="btn-book">
              Send
            </button>
          </form>
        </div>
      </section>
      <section className="info-book">
        <div className="all-info">
          <div className="info-call">
            <h5>Call Us:</h5>
            <h3>+1-234-567-8900</h3>
          </div>
          <div className="info-time">
            <h5>Hours:</h5>
            <h3>Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm</h3>
            <h5>Hours:</h5>
          </div>
          <div className="info-loc">
            <h5>Our Location:</h5>
            <h3>123 Bridge Street Nowhere Land, LA 12345 United States</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
