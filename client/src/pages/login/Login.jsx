import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../api/ApiService";
import Navbar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import "../../assets/css/login.css";
import { authenticateUser } from "../../store/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [customError, setCustomError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch(); // Obtention de la fonction dispatch

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  const loginState = useSelector((state) => state.user); // Sélection de l'état de connexion depuis Redux
  console.log("Token after authentication:", loginState.token); // Ajout du log
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting form..."); // Ajout du log
      const response = await loginUser(email, password);
      console.log("Login API response:", response);
      if (response.success) {
        // Dispatch de l'action Redux pour authentifier l'utilisateur
        dispatch(authenticateUser({ email, password }));
      } else {
        setCustomError(response.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setCustomError("Une erreur s'est produite lors de la connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Utilisation de useEffect pour effectuer des actions après la connexion réussie
  useEffect(() => {
    if (loginState.token) {
      navigate("/profile");
      console.log("Navigating to profile page...");
    }
  }, [loginState.token, navigate]);

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
              {isSubmitting ? (
                <div className="login_wrapper_form_spinner"></div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
