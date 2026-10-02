import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import heroCar from "./assets/hero-car.png";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    const existingUser = {
      name,
      username,
      email,
      password,
    };

    localStorage.setItem(
      "chasingrevUser",
      JSON.stringify(existingUser)
    );

    navigate("/login");
  };

  return (
    <main className="login-page">

      <div className="login-background">
        <img src={heroCar} alt="" />
      </div>

      <div className="login-overlay"></div>
      <div className="login-vignette"></div>
      <div className="login-grain"></div>

      <header className="login-nav">

        <Link to="/" className="login-logo">
          CHASING<span>REV</span>
        </Link>

        <Link to="/login" className="login-back">
          ← BACK TO LOGIN
        </Link>

      </header>

      <section className="login-main">

        <div className="login-brand">

          <p className="login-eyebrow">
            CHASINGREV / PRIVATE ACCESS
          </p>

          <h1>
            JOIN
            <br />
            <span>US.</span>
          </h1>

          <p className="login-subtitle">
            Create your ChasingRev account
            and enter the world of precision,
            protection and obsession.
          </p>

        </div>

        <div className="login-panel">

          <div className="panel-top">
            <span>01 / REGISTRATION</span>
            <span>CHASINGREV</span>
          </div>

          <div className="panel-heading">

            <p>CREATE ACCOUNT</p>

            <h2>
              YOUR
              <br />
              GARAGE.
            </h2>

          </div>

          <form
            className="login-form signup-form"
            onSubmit={handleSubmit}
          >

            <div className="login-field">

              <label>FULL NAME</label>

              <input
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder="Enter your name"
                required
              />

            </div>

            <div className="login-field">

              <label>USERNAME</label>

              <input
                type="text"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                placeholder="Choose a username"
                autoComplete="username"
                required
              />

            </div>

            <div className="login-field">

              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="Enter your email"
                autoComplete="email"
                required
              />

            </div>

            <div className="login-field">

              <label>PASSWORD</label>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Create a password"
                autoComplete="new-password"
                required
              />

            </div>

            <div className="login-field">

              <label>CONFIRM PASSWORD</label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
              />

            </div>

            {error && (
              <p className="signup-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="login-submit"
            >
              <span>CREATE CHASINGREV ACCOUNT</span>

              <span className="login-arrow">
                ↗
              </span>
            </button>

          </form>

          <div className="signup-prompt">

            <span>
              ALREADY HAVE AN ACCOUNT?
            </span>

            <Link to="/login">
              SIGN IN ↗
            </Link>

          </div>

        </div>

      </section>

      <footer className="login-footer">

        <span>
          CHASINGREV © 2026
        </span>

        <span>
          PUNE / INDIA
        </span>

        <span>
          PRIVATE AUTOMOTIVE DETAILING
        </span>

      </footer>

    </main>
  );
}

export default Signup;