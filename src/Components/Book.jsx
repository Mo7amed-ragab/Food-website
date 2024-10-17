import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Book.css';
const Book = () => {
  return (
    <>
      <section className="book">
        <div className="title-book">
          <h1>Book A Table</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="form-book">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label for="inputdate4" className="form-label">
                  Date
                </label>
                <input type="date" className="form-control" id="inputdate4" />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Time
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  placeholder="Enter your Name"
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <div className="col-md-6 ">
                <label for="inputPassword4" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="x-xxx-xxx-xxxx"
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Total Person
              </label>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>1 Person</option>
                <option value="1">2 Person</option>
                <option value="2">3 Person</option>
                <option value="3">4 Person</option>
              </select>
            </div>
            <button type="submit" className="btn-book">
              Book A Table
            </button>
          </form>
        </div>
      </section>
      <section className="map"></section>
    </>
  );
};

export default Book;
