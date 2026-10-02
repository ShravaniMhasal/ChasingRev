import "./Booking.css";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


/* =========================================
   CUSTOM SELECT
========================================= */

function CustomSelect({
  label,
  name,
  value,
  options,
  placeholder,
  onChange,
  required = false,
}) {

  const [open, setOpen] = useState(false);

  const selectRef = useRef(null);


  useEffect(() => {

    const handleOutsideClick = (event) => {

      if (
        selectRef.current &&
        !selectRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };

  }, []);


  const selectedOption =
    options.find(
      (option) => option.value === value
    );


  const handleSelect = (option) => {

    onChange({
      target: {
        name,
        value: option.value,
      },
    });

    setOpen(false);
  };


  return (
    <div
      className={`custom-field ${
        open ? "is-open" : ""
      }`}
      ref={selectRef}
    >

      <label>
        {label}
        {required && " *"}
      </label>


      <button
        type="button"
        className="custom-select"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >

        <span
          className={
            value
              ? "selected-value"
              : "placeholder-value"
          }
        >
          {selectedOption
            ? selectedOption.label
            : placeholder}
        </span>

        <span className="select-arrow">
          ↓
        </span>

      </button>


      <div
        className={`custom-options ${
          open ? "show" : ""
        }`}
        role="listbox"
      >

        {options.map((option, index) => (

          <button
            key={option.value}
            type="button"
            className={`custom-option ${
              value === option.value
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleSelect(option)
            }
          >

            <span className="option-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="option-label">
              {option.label}
            </span>

            <span className="option-check">
              {value === option.value
                ? "✓"
                : ""}
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}


/* =========================================
   BOOKING PAGE
========================================= */

function Booking() {

  const [submitted, setSubmitted] =
    useState(false);

  const [formData, setFormData] = useState({

    name: "",
    phone: "",
    email: "",

    car: "",

    service: "",
    package: "",

    date: "",
    time: "",

    notes: "",

  });


  /* =========================================
     FORM CHANGE
  ========================================= */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  /* =========================================
     FORM SUBMIT
  ========================================= */

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: `
Car: ${formData.car}
Service: ${formData.service}
Package: ${formData.package}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Notes: ${formData.notes}
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  } catch (error) {
    console.error("Booking submission error:", error);

    alert("Something went wrong while submitting your booking. Please try again.");
  }
};

  /* =========================================
     SUCCESS
  ========================================= */

  if (submitted) {

    return (
      <main className="booking-page">

        <header className="booking-nav">

          <Link
            to="/"
            className="booking-logo"
          >
            CHASING<span>REV</span>
          </Link>

          <Link
            to="/"
            className="back-link"
          >
            ← BACK TO WEBSITE
          </Link>

        </header>


        <section className="booking-success">

          <p className="success-number">
            BOOKING REQUEST
          </p>

          <h1>
            YOU'RE
            <br />
            <span>ON THE LIST.</span>
          </h1>

          <p className="success-text">
            Thank you, {formData.name}.
            <br />
            We've received your detailing request.
          </p>


          <div className="success-details">

            <div>

              <span>
                SERVICE
              </span>

              <strong>
                {formData.service ||
                  "Custom Request"}
              </strong>

            </div>


            <div>

              <span>
                VEHICLE
              </span>

              <strong>
                {formData.car}
              </strong>

            </div>


            <div>

              <span>
                DATE
              </span>

              <strong>
                {formData.date}
              </strong>

            </div>

          </div>


          <p className="success-note">

            Our team will contact you shortly
            to confirm your appointment.

          </p>


          <Link
            to="/"
            className="success-button"
          >

            RETURN TO CHASINGREV

            <span>
              ↗
            </span>

          </Link>

        </section>

      </main>
    );

  }


  /* =========================================
     OPTIONS
  ========================================= */

  const serviceOptions = [

    {
      value: "Exterior Detail",
      label: "Exterior Detail",
    },

    {
      value: "Interior Detail",
      label: "Interior Detail",
    },

    {
      value: "Paint Correction",
      label: "Paint Correction",
    },

    {
      value: "Ceramic Coating",
      label: "Ceramic Coating",
    },

  ];


  const packageOptions = [

    {
      value: "Daily Reset — ₹2,499",
      label: "Daily Reset — ₹2,499",
    },

    {
      value: "Showroom Finish — ₹4,999",
      label: "Showroom Finish — ₹4,999",
    },

    {
      value: "Complete Protection — ₹9,999",
      label: "Complete Protection — ₹9,999",
    },

    {
      value: "Custom",
      label: "Custom Requirement",
    },

  ];


  const timeOptions = [

    {
      value: "09:00 AM",
      label: "09:00 AM",
    },

    {
      value: "11:00 AM",
      label: "11:00 AM",
    },

    {
      value: "01:00 PM",
      label: "01:00 PM",
    },

    {
      value: "03:00 PM",
      label: "03:00 PM",
    },

    {
      value: "05:00 PM",
      label: "05:00 PM",
    },

  ];


  /* =========================================
     BOOKING FORM
  ========================================= */

  return (
    <main className="booking-page">


      {/* =====================================
          NAVIGATION
      ===================================== */}

      <header className="booking-nav">

        <Link
          to="/"
          className="booking-logo"
        >
          CHASING<span>REV</span>
        </Link>


        <Link
          to="/"
          className="back-link"
        >
          ← BACK TO WEBSITE
        </Link>

      </header>



      {/* =====================================
          HERO
      ===================================== */}

      <section className="booking-hero">

        <div>

          <p>
            CHASINGREV / APPOINTMENT
          </p>

          <h1>
            BOOK YOUR
            <br />
            <span>DETAIL.</span>
          </h1>

        </div>


        <p className="booking-intro">

          Tell us about your vehicle and what
          it needs. We'll take care of the rest.

        </p>

      </section>



      {/* =====================================
          FORM
      ===================================== */}

      <section className="booking-form-section">

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >


          {/* =================================
              01 — YOUR DETAILS
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                01
              </span>

              <h2>
                YOUR DETAILS
              </h2>

            </div>


            <div className="form-grid">


              <div className="form-field">

  <label>
    PREFERRED DATE *
  </label>

  <input
    type="text"
    name="date"
    value={formData.date}
    onChange={(event) => {

      let value = event.target.value
        .replace(/\D/g, "");

      if (value.length > 8) {
        value = value.slice(0, 8);
      }

      if (value.length > 4) {
        value =
          value.slice(0, 2) +
          "-" +
          value.slice(2, 4) +
          "-" +
          value.slice(4);
      } else if (value.length > 2) {
        value =
          value.slice(0, 2) +
          "-" +
          value.slice(2);
      }

      handleChange({
        target: {
          name: "date",
          value,
        },
      });

    }}
    placeholder="DD-MM-YYYY"
    inputMode="numeric"
    maxLength="10"
    required
  />

</div>


              <div className="form-field">

                <label>
                  PHONE NUMBER *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

              </div>


              <div className="form-field full">

                <label>
                  EMAIL ADDRESS *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

              </div>

            </div>

          </div>



          {/* =================================
              02 — VEHICLE
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                02
              </span>

              <h2>
                YOUR VEHICLE
              </h2>

            </div>


            <div className="form-grid">

              <div className="form-field full">

                <label>
                  CAR MAKE & MODEL *
                </label>

                <input
                  type="text"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  placeholder="e.g. BMW M4 Competition"
                  required
                />

              </div>

            </div>

          </div>



          {/* =================================
              03 — DETAIL
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                03
              </span>

              <h2>
                THE DETAIL
              </h2>

            </div>


            <div className="form-grid">


              <CustomSelect

                label="SERVICE"
                name="service"

                value={formData.service}

                options={serviceOptions}

                placeholder="Select a service"

                onChange={handleChange}

                required

              />


              <CustomSelect

                label="PACKAGE"
                name="package"

                value={formData.package}

                options={packageOptions}

                placeholder="Select a package"

                onChange={handleChange}

              />

            </div>

          </div>



          {/* =================================
              04 — WHEN
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                04
              </span>

              <h2>
                WHEN
              </h2>

            </div>


            <div className="form-grid">


              <div className="form-field">

                <label>
                  PREFERRED DATE *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  required
                />

              </div>


              <CustomSelect

                label="PREFERRED TIME"
                name="time"

                value={formData.time}

                options={timeOptions}

                placeholder="Select a time"

                onChange={handleChange}

                required

              />

            </div>

          </div>



          {/* =================================
              05 — NOTES
          ================================= */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                05
              </span>

              <h2>
                ANYTHING ELSE?
              </h2>

            </div>


            <div className="form-grid">

              <div className="form-field full">

                <label>
                  ADDITIONAL NOTES
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us anything we should know about your vehicle..."
                  rows="6"
                />

              </div>

            </div>

          </div>



          {/* =================================
              SUBMIT
          ================================= */}

          <div className="booking-submit">

            <p>

              By submitting this form, you are
              requesting an appointment with
              ChasingRev.

            </p>


            <button
              type="submit"
            >

              <span>
                REQUEST MY DETAIL
              </span>

              <span>
                ↗
              </span>

            </button>

          </div>


        </form>

      </section>



      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="booking-page-footer">

        <span>
          CHASINGREV © 2026
        </span>

        <span>
          PUNE / INDIA
        </span>

      </footer>


    </main>
  );
}


export default Booking;