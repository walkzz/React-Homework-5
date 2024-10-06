import { useState } from "react";
const ColorPicker = () => {
  const predefinedColors = ["red", "green", "blue", "yellow"];
  const [colors, setColors] = useState(predefinedColors);
  const [selectedColor, setSelectedColor] = useState("white");
  const [customColor, setCustomColor] = useState("");
  const [error, setError] = useState("");
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const handleCustomColorChange = (e) => {
    setCustomColor(e.target.value);
  };
  const addCustomColor = () => {
    // imagine remembering this syntax.
    if (!/^#[0-9A-F]{6}$/i.test(customColor) && !/^[a-zA-Z]+$/.test(customColor)) {
      setError("Invalid color!");
    } else if (colors.includes(customColor)) {
      setError("Color already exists");
    } else {
      setColors([...colors, customColor]);
      setError("");
    }
    setCustomColor("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Pick a Color</h2>
      {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => handleColorSelect(color)}
          style={{
            margin: "0 10px",
            padding: "10px",
            backgroundColor: color,
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {color}
        </button>
      ))}
      <div
        style={{
          marginTop: "20px",
          width: "300px",
          height: "150px",
          backgroundColor: selectedColor,
          lineHeight: "150px",
          color: "white",
          textAlign: "center",
          border: "1px solid #000",

          // probably a better way to do this in CSS.
        }}
      >
        {selectedColor === "white" ? "No color selected" : selectedColor}
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={customColor}
          onChange={handleCustomColorChange}
          placeholder="Enter custom color"
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button onClick={addCustomColor} style={{ padding: "10px" }}>
          Add Color
        </button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};
export default ColorPicker;