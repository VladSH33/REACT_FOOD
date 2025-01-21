import CategoryItem from "../CategoryItem/CategoryItem";
import React from "react";
import "./CategoryList.css";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export default CategoryList;
