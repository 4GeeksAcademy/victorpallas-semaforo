import React, { useState, useEffect } from "react";

const Home = () => {
  const [light, setLight] = useState("");
  const [activeLight, setActiveLight] = useState(0);
  const [lightColors, setLightColors] = useState(["red", "yellow", "green"]);
  const [newColor, setNewColor] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      changeLight();
    }, 3000);
    return () => clearTimeout(timer); // Limpia el timeout
  }, [activeLight]); // Se ejecuta cuando `activeLight` cambia

  function changeLight() {
    if (activeLight === lightColors.length - 1) setActiveLight(0);
    else setActiveLight(activeLight + 1);
  }

  function agregarColor() {
    if (newColor.trim() !== "") {
      setLightColors([...lightColors, newColor]);
      setNewColor(""); // Limpia el input
    }
  }

  return (
    <div className="m-auto text-center w-50">
      {lightColors.map((color, index) => (
        <div
          key={index}
          style={{ background: color, width: "50px", height: "50px", margin: "5px", cursor: "pointer" }}
          onClick={() => setLight(color)}
          className={`border rounded-circle ${color === light ? "active" : ""}`}
        ></div>
      ))}
      <input value={newColor} onChange={(e) => setNewColor(e.target.value)} placeholder="Nuevo color" />
      <button onClick={agregarColor} className="btn btn-primary">+</button>
    </div>
  );
};

export default Home;