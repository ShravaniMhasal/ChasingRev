import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import heroCar from "./assets/hero-car.png";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    const savedUser = localStorage.getItem(
      "chasingrevUser"
    );

    if (!savedUser) {
      setError(
        "No account found. Please create an account first."
      );

      return;
    }

    const user = JSON.parse(savedUser);

    const usernameMatches =
      username === user.username ||
      username === user.email;

    const passwordMatches =
      password === user.password;

    if (!usernameMatches || !passwordMatches) {
      setError(
        "Incorrect username/email or password."
      );

      return;
    }

    localStorage.setItem(
      "chasingrevLoggedIn",
      "true"
    );

    navigate("/");
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

        <Link to="/" className="login-back">
          ← BACK TO WEBSITE
        </Link>

      </header>

      <section className="login-main">

        <div className="login-brand">

          <p className="login-eyebrow">
            CHASINGREV / PRIVATE ACCESS
          </p>

          <h1>
            WELCOME
            <br />
            <span>BACK.</span>
          </h1>

          <p className="login-subtitle">
            Enter the world of precision,
            protection and obsession.
          </p>

        </div>

        <div className="login-panel">

          <div className="panel-top">

            <span>
              01 / AUTHENTICATION
            </span>

            <span>
              CHASINGREV
            </span>

          </div>

          <div className="panel-heading">

            <p>SIGN IN</p>

            <h2>
              YOUR
              <br />
              GARAGE.
            </h2>

          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            <div className="login-field">

              <label>
                USERNAME OR EMAIL
              </label>

              <input
                type="text"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                placeholder="Enter username or email"
                autoComplete="username"
                required
              />

            </div>

            <div className="login-field">

              <div className="password-label">

                <label>
                  PASSWORD
                </label>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Password recovery will be connected later."
                    )
                  }
                >
                  FORGOT?
                </button>

              </div>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Enter password"
                autoComplete="current-password"
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

              <span>
                ENTER CHASINGREV
              </span>

              <span className="login-arrow">
                ↗
              </span>

            </button>

          </form>

          <div className="login-divider">

            <span></span>

            <p>
              OR CONTINUE WITH
            </p>

            <span></span>

          </div>

          <button
            type="button"
            className="google-button"
            onClick={() =>
              alert(
                "Google authentication will be connected next."
              )
            }
          >

            <span className="google-icon">
              G
            </span>

            <span>
              CONTINUE WITH GOOGLE
            </span>

            <span>
              ↗
            </span>

          </button>

          <div className="signup-prompt">

            <span>
              NEW TO CHASINGREV?
            </span>

            <Link to="/signup">
              CREATE ACCOUNT ↗
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

export default Login;