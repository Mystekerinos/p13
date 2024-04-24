import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/pageNotFound.css";

/**
 * Composant pour afficher une page d'erreur 404.
 * @component
 */
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="">404</h1>
      <h2 className="subTitle">Oups! La page que </h2>
      <h2 className="subTitle">vous demandez n'existe pas.</h2>
      <div className="return-to-home">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
