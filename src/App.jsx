import "./App.css";
import heroCar from "./assets/hero-car.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Booking from "./Booking";
import Login from "./login";
import Signup from "./signup";
import Cars from "./cars";
import CarDetails from "./cardetails";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   HOME PAGE
========================================================= */

function Home() {

  const homeRef = useRef(null);

  const heroImageRef = useRef(null);
  const heroOverlayRef = useRef(null);
  const navbarRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const bottomRef = useRef(null);


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      /* =====================================================
         INITIAL HERO STATES
      ===================================================== */

      gsap.set(heroImageRef.current, {
        scale: 1.12,
        x: "7%",
        opacity: 0,
      });

      gsap.set(heroOverlayRef.current, {
        opacity: 0,
      });

      gsap.set(navbarRef.current, {
        y: -30,
        opacity: 0,
      });

      gsap.set(eyebrowRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(titleRef.current, {
        y: 80,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        y: 35,
        opacity: 0,
      });

      gsap.set(buttonRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(bottomRef.current, {
        y: 20,
        opacity: 0,
      });


      /* =====================================================
         CINEMATIC HERO ENTRANCE
      ===================================================== */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      /* Porsche */

      tl.to(
        heroImageRef.current,
        {
          scale: 1,
          x: "0%",
          opacity: 1,
          duration: 2.8,
          ease: "power4.out",
        },
        0
      );


      /* Overlay */

      tl.to(
        heroOverlayRef.current,
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        },
        0
      );


      /* Navbar */

      tl.to(
        navbarRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        0.5
      );


      /* Eyebrow */

      tl.to(
        eyebrowRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        0.9
      );


      /* Main title */

      tl.to(
        titleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        },
        1.05
      );


      /* Description */

      tl.to(
        descriptionRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        1.45
      );


      /* Button */

      tl.to(
        buttonRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        1.7
      );


      /* Bottom */

      tl.to(
        bottomRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        1.9
      );


      /* =====================================================
         PORSCHE SCROLL MOVEMENT
      ===================================================== */

      gsap.to(heroImageRef.current, {
        yPercent: 7,
        scale: 1.04,
        ease: "none",

        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });


      /* =====================================================
         SECTION ANIMATIONS
         
         IMPORTANT:
         .brands-header IS NOT INCLUDED HERE.
         This prevents CHOOSE YOUR MARQUE from getting
         stuck at opacity: 0.
      ===================================================== */

      gsap.utils
        .toArray(
          ".statement-inner, .categories-header, .featured-header, .difference-header, .about-inner"
        )
        .forEach((element) => {

          gsap.from(element, {
            y: 70,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          });

        });


      /* =====================================================
         MARQUES HEADER
         
         Separate animation so it ALWAYS becomes visible.
      ===================================================== */

      gsap.set(".brands-header", {
        opacity: 1,
        y: 0,
      });

      gsap.fromTo(
        ".brands-header",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".brands-section",
            start: "top 85%",
            once: true,
          },
        }
      );


      /* =====================================================
         CATEGORY ROWS
      ===================================================== */

      gsap.utils
        .toArray(".category-row")
        .forEach((row, index) => {

          gsap.from(row, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.08,
            ease: "power3.out",

            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              once: true,
            },
          });

        });


      /* =====================================================
         FEATURED IMAGE
      ===================================================== */

      gsap.from(".featured-image", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.5,
        ease: "power4.inOut",

        scrollTrigger: {
          trigger: ".featured-image",
          start: "top 80%",
          once: true,
        },
      });


      /* =====================================================
         FEATURED INFORMATION
      ===================================================== */

      gsap.from(".featured-info", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".featured-info",
          start: "top 80%",
          once: true,
        },
      });


      /* =====================================================
         DIFFERENCE ITEMS
      ===================================================== */

      gsap.utils
        .toArray(".difference-item")
        .forEach((item, index) => {

          gsap.from(item, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });

        });


      /* =====================================================
         STATS
      ===================================================== */

      gsap.from(".stats-grid div", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          once: true,
        },
      });


      /* =====================================================
         BRAND LIST
      ===================================================== */

      gsap.utils
        .toArray(".brand-list a")
        .forEach((brand, index) => {

          gsap.from(brand, {
            x: -50,
            opacity: 0,
            duration: 0.7,
            delay: index * 0.06,
            ease: "power3.out",

            scrollTrigger: {
              trigger: brand,
              start: "top 90%",
              once: true,
            },
          });

        });


      /* =====================================================
         PREBOOK
      ===================================================== */

      gsap.from(".prebook-content", {
        y: 70,
        opacity: 0,
        duration: 1,

        scrollTrigger: {
          trigger: ".prebook-section",
          start: "top 80%",
          once: true,
        },
      });


      /* =====================================================
         REFRESH SCROLLTRIGGER
      ===================================================== */

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

    }, homeRef);


    return () => ctx.revert();

  }, []);


  return (
    <main
      ref={homeRef}
      className="home-page"
    >


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        <img
          ref={heroImageRef}
          src={heroCar}
          alt="Porsche 911"
          className="hero-background"
        />

        <div
          ref={heroOverlayRef}
          className="hero-overlay"
        />


        {/* NAVBAR */}

        <header
          ref={navbarRef}
          className="navbar"
        >

          <Link
            to="/"
            className="logo"
          >
            CHASING<span>REV</span>
          </Link>


          <nav className="nav-links">

            <Link to="/cars">
              Cars
            </Link>

            <a href="#brands">
              Brands
            </a>

            <a href="#about">
              About
            </a>

          </nav>


          <div className="nav-actions">

            <Link
              to="/login"
              className="nav-login"
            >
              Login
            </Link>

            <Link
              to="/cars"
              className="nav-book"
            >
              EXPLORE CARS ↗
            </Link>

          </div>

        </header>


        {/* HERO CONTENT */}

        <div className="hero-content">

          <p
            ref={eyebrowRef}
            className="hero-eyebrow"
          >
            PREMIUM AUTOMOTIVE MARKETPLACE
          </p>


          <h1 ref={titleRef}>

            CHASING
            <br />

            <span>
              REV.
            </span>

          </h1>


          <p
            ref={descriptionRef}
            className="hero-description"
          >
            Find the machine that moves you.
            <br />
            Performance, luxury and automotive
            icons — curated in one destination.
          </p>


          <Link
            ref={buttonRef}
            to="/cars"
            className="hero-button"
          >
            EXPLORE COLLECTION ↗
          </Link>

        </div>


        {/* HERO BOTTOM */}

        <div
          ref={bottomRef}
          className="hero-bottom"
        >

          <span>
            EST. 2026
          </span>

          <span className="hero-scroll">
            SCROLL TO EXPLORE
            <i></i>
          </span>

          <span>
            PUNE / INDIA
          </span>

        </div>

      </section>


      {/* =====================================================
          STATEMENT
      ===================================================== */}

      <section className="statement-section">

        <div className="statement-inner">

          <p className="section-kicker">
            THE CHASINGREV STANDARD
          </p>

          <h2>

            CARS
            <br />

            <span>
              WITHOUT COMPROMISE.
            </span>

          </h2>

          <p className="statement-text">
            Curated performance. Exceptional luxury.
            Automotive icons selected for people who
            know exactly what they want.
          </p>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="categories-section">

        <div className="categories-header">

          <p className="section-kicker">
            THE COLLECTION
          </p>

          <h2>

            BUILT FOR
            <br />

            <span>
              THE OBSESSED.
            </span>

          </h2>

        </div>


        <div className="category-list">


          <Link
            to="/cars"
            className="category-row"
          >

            <span className="category-number">
              01
            </span>

            <div className="category-content">

              <h3>
                PERFORMANCE
              </h3>

              <p>
                BMW M · Audi RS · Mercedes-AMG · Porsche
              </p>

            </div>

            <span className="category-arrow">
              ↗
            </span>

          </Link>


          <Link
            to="/cars"
            className="category-row"
          >

            <span className="category-number">
              02
            </span>

            <div className="category-content">

              <h3>
                LUXURY
              </h3>

              <p>
                Range Rover · BMW · Mercedes-Benz · Audi
              </p>

            </div>

            <span className="category-arrow">
              ↗
            </span>

          </Link>


          <Link
            to="/cars"
            className="category-row"
          >

            <span className="category-number">
              03
            </span>

            <div className="category-content">

              <h3>
                SUPERCARS
              </h3>

              <p>
                Ferrari · Lamborghini · Porsche
              </p>

            </div>

            <span className="category-arrow">
              ↗
            </span>

          </Link>


          <Link
            to="/cars"
            className="category-row"
          >

            <span className="category-number">
              04
            </span>

            <div className="category-content">

              <h3>
                SUVS
              </h3>

              <p>
                G 63 · Urus · Range Rover · BMW XM
              </p>

            </div>

            <span className="category-arrow">
              ↗
            </span>

          </Link>

        </div>

      </section>


      {/* =====================================================
          FEATURED
      ===================================================== */}

      <section className="featured-section">

        <div className="featured-header">

          <p className="section-kicker">
            THE COLLECTION
          </p>

          <h2>

            SEE WHAT'S
            <br />

            <span>
              AVAILABLE.
            </span>

          </h2>

        </div>


        <div className="featured-car">


          <div className="featured-image">

            <img
              src="https://commons.wikimedia.org/wiki/Special:Redirect/file/2024_BMW_M4_(G82)_Competition_IMG_9375.jpg"
              alt="BMW M4 Competition"
            />

            <div className="featured-image-overlay" />

            <span className="featured-label">
              FEATURED MACHINE
            </span>

          </div>


          <div className="featured-info">

            <div>

              <p className="featured-brand">
                BMW
              </p>

              <h3>

                M4
                <br />

                COMPETITION.

              </h3>

              <p className="featured-description">
                A high-performance coupe engineered
                for precision, aggression and pure
                driving character.
              </p>

            </div>


            <div className="featured-bottom">


              <div className="featured-specs">

                <span>
                  <small>
                    POWER
                  </small>
                  530 HP
                </span>

                <span>
                  <small>
                    FUEL
                  </small>
                  PETROL
                </span>

                <span>
                  <small>
                    TRANSMISSION
                  </small>
                  AUTOMATIC
                </span>

              </div>


              <div className="featured-price">

                <small>
                  STARTING FROM
                </small>

                <strong>
                  ₹1.61 Cr*
                </strong>

              </div>


              <Link
                to="/cars/bmw-m4-competition"
                className="featured-button"
              >
                VIEW CAR ↗
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DIFFERENCE
      ===================================================== */}

      <section className="difference-section">

        <div className="difference-header">

          <p className="section-kicker">
            THE CHASINGREV DIFFERENCE
          </p>

          <h2>

            THE RIGHT CAR
            <br />

            <span>
              CHANGES EVERYTHING.
            </span>

          </h2>

        </div>


        <div className="difference-grid">


          <div className="difference-item">

            <strong>
              01
            </strong>

            <h3>
              CURATED
            </h3>

            <p>
              A focused collection of performance,
              luxury and iconic automobiles.
            </p>

          </div>


          <div className="difference-item">

            <strong>
              02
            </strong>

            <h3>
              TRANSPARENT
            </h3>

            <p>
              Clear vehicle specifications, pricing
              and availability before you decide.
            </p>

          </div>


          <div className="difference-item">

            <strong>
              03
            </strong>

            <h3>
              PERSONAL
            </h3>

            <p>
              A premium buying experience designed
              around your next machine.
            </p>

          </div>


        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-grid">

          <div>

            <strong>
              13+
            </strong>

            <span>
              VEHICLES
            </span>

          </div>


          <div>

            <strong>
              07
            </strong>

            <span>
              PREMIUM MARQUES
            </span>

          </div>


          <div>

            <strong>
              01
            </strong>

            <span>
              DESTINATION
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          BRANDS / MARQUES
      ===================================================== */}

      <section
        className="brands-section"
        id="brands"
      >

        <div className="brands-header">

          <p className="section-kicker">
            THE MARQUES
          </p>

          <h2>

            CHOOSE YOUR
            <br />

            <span>
              MARQUE.
            </span>

          </h2>

        </div>


        <div className="brand-list">


          <Link to="/cars">

            BMW

            <span>
              ↗
            </span>

          </Link>


          <Link to="/cars">

            AUDI

            <span>
              ↗
            </span>

          </Link>


          <Link to="/cars">

            MERCEDES-BENZ

            <span>
              ↗
            </span>

          </Link>


          <Link to="/cars">

            PORSCHE

            <span>
              ↗
            </span>

          </Link>


          <Link to="/cars">

            LAND ROVER

            <span>
              ↗
            </span>

          </Link>


          <Link to="/cars">

            LAMBORGHINI

            <span>
              ↗
            </span>

          </Link>


          <Link to="/cars">

            FERRARI

            <span>
              ↗
            </span>

          </Link>


        </div>

      </section>


      {/* =====================================================
          PREBOOK
      ===================================================== */}

      <section className="prebook-section">

        <div className="prebook-content">

          <p className="section-kicker">
            EARLY ACCESS
          </p>

          <h2>

            YOUR NEXT
            <br />

            <span>
              MACHINE.
            </span>

          </h2>

          <Link
            to="/cars"
            className="prebook-button"
          >
            START YOUR SEARCH ↗
          </Link>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-inner">

          <p className="section-kicker">
            CHASINGREV / 2026
          </p>

          <h2>

            FIND THE CAR.
            <br />

            <span>
              FEEL THE DRIVE.
            </span>

          </h2>

          <p className="about-text">
            ChasingRev is a premium automotive marketplace
            built for enthusiasts searching for performance,
            luxury and iconic machines. Discover the right
            car, explore every detail and reserve your next
            machine before it's gone.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="site-footer">

        <div className="footer-top">

          <Link
            to="/"
            className="footer-logo"
          >
            CHASING<span>REV</span>
          </Link>

          <div className="footer-links">

            <Link to="/cars">
              Cars
            </Link>

            <a href="#brands">
              Brands
            </a>

            <a href="#about">
              About
            </a>

            <Link to="/login">
              Login
            </Link>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 CHASINGREV
          </span>

          <span>
            PUNE / INDIA
          </span>

          <span>
            PREMIUM AUTOMOTIVE MARKETPLACE
          </span>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   APP ROUTER
========================================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cars"
          element={<Cars />}
        />

        <Route
          path="/cars/:id"
          element={<CarDetails />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;