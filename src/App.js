import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact name="John Doe" email="jdoe@gmail.com" phone="100-000-0000" />
      <Contact name="Karen Doe" email="kdoe@gmail.com" phone="100-000-0000" />
    </div>
  );
}

export default App;
