import React, { useState } from "react";
import "../styles/Modal.css";

function AddWidgetModal({ onAddWidget, categories, onClose }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0].name);

  const handleSubmit = () => {
    onAddWidget({ name, text }, category);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit} className="add-widget">Add Widget</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AddWidgetModal;
