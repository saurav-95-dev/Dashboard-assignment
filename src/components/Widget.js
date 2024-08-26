import React from "react";
import "../styles/Widget.css";

function Widget({ widget, category, onRemove }) {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button className="remove-widget" onClick={() => onRemove(category, widget.id)}>x</button>
      
    </div>
  );
}

export default Widget;
