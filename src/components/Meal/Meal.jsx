import { Link } from "react-router-dom";
import "./Meal.css";
import React from "react";

const Meal = (props) => {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
};

export default Meal;
