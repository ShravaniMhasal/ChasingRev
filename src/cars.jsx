import "./Cars.css";

import { Link } from "react-router-dom";

const cars = [
  {
    id: "bmw-m4-competition",
    brand: "BMW",
    model: "M4 Competition",
    category: "Performance Coupe",
    price: "₹1.61 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "530 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2024_BMW_M4_(G82)_Competition_IMG_9375.jpg",
    status: "AVAILABLE",
  },
  {
    id: "bmw-m2",
    brand: "BMW",
    model: "M2",
    category: "Performance Coupe",
    price: "₹1.07 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "460 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2024_BMW_M2.jpg",
    status: "AVAILABLE",
  },
  {
    id: "bmw-m340i",
    brand: "BMW",
    model: "M340i xDrive",
    category: "Performance Sedan",
    price: "₹77.10 Lakh*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "374 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/BMW_M340i_(G20,_2024)_(54522566820).jpg",
    status: "AVAILABLE",
  },
  {
    id: "bmw-xm",
    brand: "BMW",
    model: "XM",
    category: "Performance SUV",
    price: "₹2.60 Cr*",
    fuel: "Hybrid",
    transmission: "Automatic",
    power: "653 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/BMW_XM.jpg",
    status: "LIMITED",
  },
  {
    id: "audi-rs5",
    brand: "AUDI",
    model: "RS 5",
    category: "Performance Coupe",
    price: "₹1.15 Cr*",
    fuel: "Hybrid",
    transmission: "Automatic",
    power: "639 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audi_RS5_B10_IMG_7877.jpg",
    status: "PRE-BOOK",
  },
  {
    id: "audi-q8",
    brand: "AUDI",
    model: "Q8",
    category: "Luxury SUV",
    price: "₹1.17 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "340 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audi_Q8.jpg",
    status: "AVAILABLE",
  },
  {
    id: "mercedes-c63",
    brand: "MERCEDES-BENZ",
    model: "AMG C 63 S E Performance",
    category: "Performance Sedan",
    price: "₹1.95 Cr*",
    fuel: "Plug-in Hybrid",
    transmission: "Automatic",
    power: "680 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_C_63_(A205)_IMG_2983.jpg",
    status: "PRE-BOOK",
  },
  {
    id: "mercedes-g63",
    brand: "MERCEDES-BENZ",
    model: "AMG G 63",
    category: "Luxury SUV",
    price: "₹3.74 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "605 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-Benz_G63.jpg",
    status: "LIMITED",
  },
  {
    id: "mercedes-amg-gt",
    brand: "MERCEDES-BENZ",
    model: "AMG GT Coupe",
    category: "Grand Tourer",
    price: "₹3.00 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "585 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_GT.jpg",
    status: "PRE-BOOK",
  },
  {
    id: "porsche-911",
    brand: "PORSCHE",
    model: "911 Carrera",
    category: "Sports Coupe",
    price: "₹2.11 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "394 PS",
    year: "2027",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Porsche_911_Carrera.jpg",
    status: "PRE-BOOK",
  },
  {
    id: "range-rover-sport",
    brand: "LAND ROVER",
    model: "Range Rover Sport",
    category: "Luxury SUV",
    price: "₹1.65 Cr*",
    fuel: "Petrol / Diesel",
    transmission: "Automatic",
    power: "635 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Range_Rover_Sport_(2024)_(53986825574).jpg",
    status: "AVAILABLE",
  },
  {
    id: "lamborghini-urus",
    brand: "LAMBORGHINI",
    model: "Urus",
    category: "Super SUV",
    price: "₹4.22 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "666 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lamborghini_Urus_01.jpg",
    status: "PRE-BOOK",
  },
  {
    id: "ferrari-roma",
    brand: "FERRARI",
    model: "Roma",
    category: "Grand Tourer",
    price: "₹3.76 Cr*",
    fuel: "Petrol",
    transmission: "Automatic",
    power: "620 HP",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2025_Ferrari_Roma.jpg",
    status: "PRE-BOOK",
  },
];

function Cars() {
  return (
    <main className="cars-page">

      <section className="cars-hero">

        <div className="cars-hero-content">

          <p className="cars-eyebrow">
            CHASINGREV / THE COLLECTION
          </p>

          <h1>
            THE MACHINES
            <br />
            <span>WE CHASE.</span>
          </h1>

          <p className="cars-intro">
            A curated collection of performance,
            luxury and automotive icons.
            Discover your next machine and
            reserve it before it leaves the garage.
          </p>

        </div>

        <div className="cars-hero-meta">
          <span>13 VEHICLES</span>
          <span>INDIA / 2026</span>
        </div>

      </section>


      <section className="collection-section" id="cars">

        <div className="collection-header">

          <div>
            <p className="section-kicker">
              01 / THE COLLECTION
            </p>

            <h2>
              FEATURED
              <br />
              <span>MACHINES.</span>
            </h2>
          </div>

          <p className="collection-description">
            Performance cars, luxury SUVs and
            grand tourers selected for people
            who care about what they drive.
          </p>

        </div>


        <div className="cars-grid">

          {cars.map((car, index) => (

            <article
              className="car-card"
              key={car.id}
            >

              <Link
                to={`/cars/${car.id}`}
                className="car-image-link"
              >

                <div className="car-image-wrap">

                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    loading={index > 2 ? "lazy" : "eager"}
                  />

                  <div className="car-image-overlay"></div>

                  <span className="car-status">
                    {car.status}
                  </span>

                  <span className="car-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </Link>


              <div className="car-info">

                <div className="car-brand">
                  {car.brand}
                </div>

                <h3>
                  {car.model}
                </h3>

                <p className="car-category">
                  {car.category}
                </p>


                <div className="car-specs">

                  <span>{car.year}</span>
                  <span>{car.fuel}</span>
                  <span>{car.transmission}</span>
                  <span>{car.power}</span>

                </div>


                <div className="car-bottom">

                  <div>

                    <span className="price-label">
                      STARTING FROM
                    </span>

                    <strong>
                      {car.price}
                    </strong>

                  </div>


                  <Link
                    to={`/cars/${car.id}`}
                    className="car-view"
                  >
                    VIEW CAR ↗
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      <section className="brands-section">

        <div className="brands-inner">

          <p className="section-kicker">
            02 / MANUFACTURERS
          </p>

          <h2>
            CHOOSE YOUR
            <br />
            <span>MARQUE.</span>
          </h2>

          <div className="brand-list">

            <span>BMW</span>
            <span>AUDI</span>
            <span>MERCEDES-BENZ</span>
            <span>PORSCHE</span>
            <span>LAND ROVER</span>
            <span>LAMBORGHINI</span>
            <span>FERRARI</span>

          </div>

        </div>

      </section>


      <section className="prebook-section">

        <div className="prebook-content">

          <p className="section-kicker">
            03 / EARLY ACCESS
          </p>

          <h2>
            YOUR NEXT
            <br />
            <span>MACHINE.</span>
          </h2>

          <p>
            Found something you want?
            Reserve it before it arrives.
          </p>

          <Link
            to="/booking"
            className="prebook-button"
          >
            START A PRE-BOOKING ↗
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Cars;