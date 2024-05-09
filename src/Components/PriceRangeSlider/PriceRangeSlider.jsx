import React, { useState } from "react";
import { useStore } from "../../state/useState";

const PriceRangeSlider = ({ min, max }) => {
  const { setMinPrice, setMaxPrice } = useStore();
  const [minPriceValue, setMinPriceValue] = useState(min);
  const [maxPriceValue, setMaxPriceValue] = useState(max);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice" && parseInt(value) <= parseInt(maxPriceValue)) {
      setMinPriceValue(parseInt(value));
      setMinPrice(parseInt(value)); // Actualiza el precio mínimo en el estado global
    } else if (name === "maxPrice" && parseInt(value) >= parseInt(minPriceValue)) {
      setMaxPriceValue(parseInt(value));
      setMaxPrice(parseInt(value)); // Actualiza el precio máximo en el estado global
    }
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <div className="flex justify-center items-center gap-2">
        <label htmlFor="minPriceRange">Precio Min:</label>
        <input
          type="range"
          id="minPriceRange"
          name="minPrice"
          min={min}
          max={max}
          value={minPriceValue}
          onChange={handlePriceChange}
        />
        <div>${minPriceValue}</div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <label htmlFor="maxPriceRange">Precio Max:</label>
        <input
          type="range"
          id="maxPriceRange"
          name="maxPrice"
          min={min}
          max={max}
          value={maxPriceValue}
          onChange={handlePriceChange}
        />
        <div>${maxPriceValue}</div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;