import React from "react";
import Widget from "./Widget";
import "../styles/Category.css";

function Category({ category, onRemoveWidget }) {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets-container">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            category={category.name}
            onRemove={onRemoveWidget}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
