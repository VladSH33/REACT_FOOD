import { Link } from "react-router-dom";
import React from "react";
import "./CategoryItem.css";

const CategoryItem = (props) => {
  const {
    // idCategory,
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  } = props;

  return (
    <div className="card">
      <img src={strCategoryThumb} alt={strCategory} className="card-image" />
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
