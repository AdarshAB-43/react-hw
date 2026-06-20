import React, { useState } from "react";

const FavoriteFoods = () => {
  const foods = ["Pizza", "Burger", "Biryani", "Pasta", "Ice Cream"];

  const [message, setMessage] = useState("Select a food that you love!");

  const handleClick = (food) => {
    setMessage(`I love ${food}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>My Favorite Foods</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {foods.map((food, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {food}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleClick(food)}
            >
              Love it ❤️
            </button>
          </li>
        ))}
      </ul>

      <h3>{message}</h3>
    </div>
  );
};

export default FavoriteFoods;