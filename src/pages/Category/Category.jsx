import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../../api";

import Preloader from "../../components/Preloader/Preloader";
import MealList from "../../components/MealList/MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => goBack(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
