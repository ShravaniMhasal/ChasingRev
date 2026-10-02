import "./CarDetails.css";

import { Link, useParams } from "react-router-dom";

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
    torque: "650 Nm",
    acceleration: "3.5 SEC",
    topSpeed: "250 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2024_BMW_M4_(G82)_Competition_IMG_9375.jpg",
    status: "AVAILABLE",
    description:
      "A high-performance coupe engineered around precision, aggression and everyday usability. The M4 Competition combines brutal performance with the refinement expected from BMW.",
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
    torque: "550 Nm",
    acceleration: "4.1 SEC",
    topSpeed: "285 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2024_BMW_M2.jpg",
    status: "AVAILABLE",
    description:
      "Compact dimensions, rear-wheel-drive character and serious M performance. The M2 is built for drivers who want an engaging sports car without unnecessary compromise.",
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
    torque: "500 Nm",
    acceleration: "4.4 SEC",
    topSpeed: "250 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/BMW_M340i_(G20,_2024)_(54522566820).jpg",
    status: "AVAILABLE",
    description:
      "A performance sedan that balances everyday comfort with serious speed. The M340i brings BMW M performance into a practical four-door package.",
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
    torque: "800 Nm",
    acceleration: "4.3 SEC",
    topSpeed: "270 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/BMW_XM.jpg",
    status: "LIMITED",
    description:
      "BMW's high-performance luxury SUV brings electrified power, dramatic styling and immense road presence together in one unmistakable machine.",
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
    torque: "825 Nm",
    acceleration: "3.6 SEC",
    topSpeed: "280 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audi_RS5_B10_IMG_7877.jpg",
    status: "PRE-BOOK",
    description:
      "A sharp and sophisticated performance machine combining Audi's quattro character with aggressive RS engineering and modern electrified performance.",
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
    torque: "500 Nm",
    acceleration: "5.6 SEC",
    topSpeed: "250 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Audi_Q8.jpg",
    status: "AVAILABLE",
    description:
      "A luxury SUV with a commanding presence, premium cabin and refined performance. The Q8 is designed for effortless long-distance luxury.",
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
    torque: "1020 Nm",
    acceleration: "3.4 SEC",
    topSpeed: "280 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_C_63_(A205)_IMG_2983.jpg",
    status: "PRE-BOOK",
    description:
      "AMG engineering taken to another level. The C 63 S E Performance pairs electrified technology with aggressive performance and unmistakable AMG character.",
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
    torque: "850 Nm",
    acceleration: "4.3 SEC",
    topSpeed: "240 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-Benz_G63.jpg",
    status: "LIMITED",
    description:
      "An automotive icon. The AMG G 63 combines its unmistakable boxy silhouette with immense performance and the luxury of the Mercedes-Benz G-Class.",
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
    torque: "800 Nm",
    acceleration: "3.2 SEC",
    topSpeed: "315 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-AMG_GT.jpg",
    status: "PRE-BOOK",
    description:
      "A grand tourer built for dramatic performance. The AMG GT blends long-distance comfort with the speed and character of a true AMG sports car.",
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
    torque: "450 Nm",
    acceleration: "4.1 SEC",
    topSpeed: "294 KM/H",
    year: "2027",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Porsche_911_Carrera.jpg",
    status: "PRE-BOOK",
    description:
      "A timeless sports car icon. The 911 Carrera continues the legendary formula of rear-engine performance, precision handling and everyday usability.",
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
    torque: "750 Nm",
    acceleration: "3.8 SEC",
    topSpeed: "290 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Range_Rover_Sport_(2024)_(53986825574).jpg",
    status: "AVAILABLE",
    description:
      "A luxury SUV combining dramatic design, commanding performance and premium comfort for both urban streets and long-distance journeys.",
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
    torque: "850 Nm",
    acceleration: "3.5 SEC",
    topSpeed: "305 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lamborghini_Urus_01.jpg",
    status: "PRE-BOOK",
    description:
      "Supercar performance in an SUV silhouette. The Urus delivers dramatic Lamborghini styling, immense power and everyday versatility.",
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
    torque: "760 Nm",
    acceleration: "3.4 SEC",
    topSpeed: "320 KM/H",
    year: "2026",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/2025_Ferrari_Roma.jpg",
    status: "PRE-BOOK",
    description:
      "A modern interpretation of classic Italian grand touring. The Ferrari Roma combines elegant proportions with breathtaking performance.",
  },
];

function CarDetails() {
  const { id } = useParams();

  const car = cars.find((item) => item.id === id);

  if (!car) {
    return (
      <main className="car-not-found">
        <p>CHASINGREV / 404</p>

        <h1>
          CAR
          <br />
          <span>NOT FOUND.</span>
        </h1>

        <Link to="/cars">
          ← BACK TO COLLECTION
        </Link>
      </main>
    );
  }

  return (
    <main className="car-details-page">

      {/* NAVBAR */}

      <header className="details-nav">

        <Link
          to="/"
          className="details-logo"
        >
          CHASING<span>REV</span>
        </Link>

        <Link
          to="/cars"
          className="details-back"
        >
          ← BACK TO COLLECTION
        </Link>

      </header>


      {/* HERO IMAGE */}

      <section className="details-hero">

        <div className="details-image">

          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
          />

          <div className="details-image-overlay"></div>

        </div>


        <div className="details-hero-content">

          <p className="details-kicker">
            {car.brand} / {car.category}
          </p>

          <h1>
            {car.model}
          </h1>

          <div className="details-price">
            {car.price}
          </div>

          <div className="details-status">
            {car.status}
          </div>

        </div>

      </section>


      {/* VEHICLE INFORMATION */}

      <section className="details-info">

        <div className="details-description">

          <p className="details-section-label">
            01 / THE MACHINE
          </p>

          <h2>
            BUILT TO
            <br />
            <span>BE FELT.</span>
          </h2>

          <p className="description-text">
            {car.description}
          </p>

        </div>


        <div className="details-spec-panel">

          <div className="spec-row">

            <span>YEAR</span>
            <strong>{car.year}</strong>

          </div>

          <div className="spec-row">

            <span>POWER</span>
            <strong>{car.power}</strong>

          </div>

          <div className="spec-row">

            <span>TORQUE</span>
            <strong>{car.torque}</strong>

          </div>

          <div className="spec-row">

            <span>0–100 KM/H</span>
            <strong>{car.acceleration}</strong>

          </div>

          <div className="spec-row">

            <span>TOP SPEED</span>
            <strong>{car.topSpeed}</strong>

          </div>

          <div className="spec-row">

            <span>FUEL</span>
            <strong>{car.fuel}</strong>

          </div>

          <div className="spec-row">

            <span>TRANSMISSION</span>
            <strong>{car.transmission}</strong>

          </div>

        </div>

      </section>


      {/* PRE-BOOK CTA */}

      <section className="details-book">

        <div className="details-book-content">

          <p className="details-section-label">
            02 / EARLY ACCESS
          </p>

          <h2>
            MAKE IT
            <br />
            <span>YOURS.</span>
          </h2>

          <p>
            Secure your place for this vehicle
            through ChasingRev.
          </p>

          <Link
            to={`/booking?car=${car.id}`}
            className="details-book-button"
          >
            PRE-BOOK THIS CAR ↗
          </Link>

        </div>

        <div className="details-book-number">
          CHASINGREV
          <br />
          {car.brand}
          <br />
          {car.model}
        </div>

      </section>


      {/* FOOTER */}

      <footer className="details-footer">

        <span>
          CHASINGREV © 2026
        </span>

        <span>
          PUNE / INDIA
        </span>

        <span>
          PRIVATE AUTOMOTIVE COLLECTION
        </span>

      </footer>

    </main>
  );
}

export default CarDetails;