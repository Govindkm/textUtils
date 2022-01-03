import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

let currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";

function App() {
  const [alert, setAlert] = useState(null);
  function showAlert(type, message) {
    let newAlert = { type: type, message: message };
    setAlert(newAlert);
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  return (
    <>
      <Router basename="process.env.PUBLIC_URL">
        <Navbar title="TextUtils" showAlert={showAlert} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={<TextForm showAlert={showAlert}></TextForm>}
          />
        </Routes>
      </Router>
    </>
  );
}

function toggleTheme() {
  console.log(document.body);
  if (currentTheme === "light") {
    currentTheme = "dark";
    document.body.style.backgroundColor = "rgba(43,42,46,0.8)";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark");
  } else {
    currentTheme = "light";
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("theme", "light");
  }
}

export default App;
export { toggleTheme, currentTheme };
