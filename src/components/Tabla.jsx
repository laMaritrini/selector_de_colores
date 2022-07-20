import { CompactPicker } from "react-color";

const Tabla = ({ color, setColor }) => {
  return (
    <div className="tabla">
      <div className="tabla__colores">
        <CompactPicker
          color={color}
          onChange={(color) => setColor(color.hex)}
        />
      </div>
    </div>
  );
};

export default Tabla;
