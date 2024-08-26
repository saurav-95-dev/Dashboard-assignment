import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import "./App.css";

function App() {
  const [data, setData] = useState({
    categories: [
      {
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: 1, name: "Cloud Accounts", text: "Widget Content" },
          { id: 2, name: "Cloud Account Risk Assessment", text: "Widget Content" },
        ],
      },
      {
        name: "CWPP Dashboard",
        widgets: [
          { id: 3, name: "Top 5 Namespace Specific Alerts", text: "Widget Content" },
          { id: 4, name: "Workload Alerts", text: "Widget Content" },
        ],
      },
      {
        name: "Registry Scan",
        widgets: [
          { id: 5, name: "Image Risk Assessment", text: "Widget Content" },
          { id: 6, name: "Image Security Issues", text: "Widget Content" },
        ],
      },
    ],
  });

  return (
    <div className="App">
      <Navbar />
      <Breadcrumb />
      <Dashboard data={data} setData={setData} />
    </div>
  );
}

export default App;
