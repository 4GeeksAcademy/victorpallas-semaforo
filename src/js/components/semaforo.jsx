import React, { useState } from "react";

const Home = () => {
  const [light, setLight] = useState(""); // Estado para la luz activa
  const [lightColors, setLightColors] = useState(["red", "yellow", "green"]);
  const [newColor, setNewColor] = useState("");

  function agregarColor() {
    if (newColor.trim() !== "") {
      setLightColors([...lightColors, newColor]);
      setNewColor(""); // Limpiar input
    }
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h1>SEMAFORO</h1>
      <div
        className="bg-dark p-3 rounded d-flex flex-column align-items-center"
        style={{ width: "80px", padding: "10px" }}
      >
        {lightColors.map((color, index) => (
          <div
            key={index}
            style={{
              background: color,
              width: "50px",
              height: "50px",
              margin: "5px",
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow: color === light ? `0px 0px 15px 5px ${color}` : "none", // Efecto de luz
            }}
            onClick={() => setLight(color)}
          ></div>
        ))}
      </div>
       <h1>Pulsa en el color</h1>
    </div>
  );
};

export default Home;