import React, { useState } from "react";
import Category from "./Category";
import AddWidgetModal from "./AddWidgetModal";
import SearchBar from "./SearchBar";
import "../styles/Dashboard.css";

function Dashboard({ data, setData }) {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddWidget = (newWidget, categoryName) => {
    const updatedData = { ...data };
    const category = updatedData.categories.find((cat) => cat.name === categoryName);
    if (category) {
      category.widgets.push({
        id: new Date().getTime(),
        name: newWidget.name,
        text: newWidget.text,
      });
      setData(updatedData);
    }
    setShowModal(false);
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    const updatedData = { ...data };
    const category = updatedData.categories.find((cat) => cat.name === categoryName);
    if (category) {
      category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
      setData(updatedData);
    }
  };

  const filteredCategories = data.categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div className="dashboard-container">
      <h1>CNAPP Dashboard</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCategories.map((category) => (
        <Category
          key={category.name}
          category={category}
          onRemoveWidget={handleRemoveWidget}
        />
      ))}
      <button className="add-widget-button" onClick={() => setShowModal(true)}>
        + Add Widget
      </button>
      {showModal && (
        <AddWidgetModal
          onAddWidget={handleAddWidget}
          categories={data.categories}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;
