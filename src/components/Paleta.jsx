import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "../styles/Paleta.css";

const Paleta = ({ currentPalette, currentPosition, setCurrentPosition }) => {
  return (
    <div className="paleta">
      {currentPalette.map((color, index) => (
        <div
          className={`color ${index === currentPosition ? "active" : ""}`}
          style={{ background: color }}
          key={index}
          onClick={() => setCurrentPosition(index)}
        >
          <AiOutlinePlus />
        </div>
      ))}
    </div>
  );
};

export default Paleta;
