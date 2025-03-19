import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Poste del semáforo */}
      <div className="w-2 h-20 bg-black"></div>
      {/* Cuerpo del semáforo */}
      <div className="bg-black p-4 rounded-lg flex flex-col items-center space-y-4 w-24 h-64">
        <div
          className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-500 ${color === "red" ? "bg-red-500 shadow-lg shadow-red-500/50" : "bg-gray-700"}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-500 ${color === "yellow" ? "bg-yellow-500 shadow-lg shadow-yellow-500/50" : "bg-gray-700"}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-500 ${color === "green" ? "bg-green-500 shadow-lg shadow-green-500/50" : "bg-gray-700"}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
}

