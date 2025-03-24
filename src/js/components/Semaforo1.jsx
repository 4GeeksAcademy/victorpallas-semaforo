import React, { useState } from "react";
// Semaforo con boton para apagar las luces
const Home = () => {
  const [light, setLight] = useState(""); // Estado para la luz activa
  const [lightColors, setLightColors] = useState(["red", "yellow", "green"]);

  function apagarSemaforo() {
    setLight(""); // Apaga todas las luces
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      {/* Semáforo */}
      <div
        className="bg-dark p-3 rounded d-flex flex-column align-items-center"
        style={{
          width: "80px",
          padding: "10px",
          borderRadius: "10px",
        }}
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

      {/* Botón para apagar el semáforo */}
      <button onClick={apagarSemaforo} className="btn btn-danger mt-3">
        Apagar semáforo
      </button>
    </div>
  );
};

export default Home;
