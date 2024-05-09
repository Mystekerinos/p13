import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { loginUser } from "../../api/ApiService"; // Import de la fonction loginUser depuis le fichier userApi.js
import Navbar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import "../../assets/css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [customError, setCustomError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Nouvel état pour gérer la soumission en cours

  const navigate = useNavigate();
  const isMounted = useRef(true); // Utilisation de useRef pour suivre le montage du composant

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifie si une soumission est déjà en cours
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true); // Définit l'état de la soumission en cours sur true

    console.log("Form submitted");
    try {
      const response = await loginUser(email, password);
      console.log("Login API response:", response);
      console.log("response.success", response.success);
      if (response.success) {
        console.log(response.token);
        window.localStorage.setItem("jwtToken", response.token);
        console.log("User logged in");
        navigate("/profile");
      } else {
        setCustomError(response.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setCustomError("Une erreur s'est produite lors de la connexion.");
    } finally {
      setIsSubmitting(false); // Réinitialise l'état de la soumission en cours
    }
  };
  console.log("localStorage", localStorage);
  useEffect(() => {
    if (localStorage.getItem("rememberMe") === "true") {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");
      if (storedEmail) setEmail(storedEmail);
      if (storedPassword) setPassword(storedPassword);
      setRememberMe(false);
    }
    console.log(
      "localStorage.getItem(jwtToken)",
      localStorage.getItem("jwtToken")
    );
    if (localStorage.getItem("jwtToken")) {
      console.log("User logged in from local storage");
      navigate("/profile");
    }

    // Nettoyage du composant lorsqu'il est démonté
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="login-main">
        <section className="login-content">
          <div className="login_wrapper">
            <div className="login_wrapper_title">
              <CircleUserRound />
              <h1>Sign in</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="unique-email"
                value={email}
                autoComplete="off"
                onChange={handleEmailChange}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="unique-password"
                value={password}
                autoComplete="off"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {customError && <p className="error-message">{customError}</p>}
            <button
              type="submit"
              className="signin-button"
              disabled={isSubmitting}
            >
              {" "}
              {/* Désactive le bouton lors de la soumission du formulaire */}
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
