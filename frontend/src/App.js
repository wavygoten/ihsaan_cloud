import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./routes/Router";

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500)).then(
      () => {
        const el = document.querySelector(".loader-container");
        if (el) {
          el.remove();
          setLoading(!isLoading);
        }
      }
    );
  }

  useEffect(() => fakeRequest(), []);

  if (isLoading) return null;

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
