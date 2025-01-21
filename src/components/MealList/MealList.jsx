import Meal from "../Meal/Meal";
import "./MealList.css";
import React from "react";

const MealList = ({ meals }) => {
  return (
    <div className="list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

export default MealList;
