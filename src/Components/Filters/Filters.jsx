import React, { useState } from "react";
import FilterButton from "../Buttoms/FilterButton";
import { useStore } from "../../state/useState";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";

const Filters = () => {
  const { setSelectedOption, setPriceRange } = useStore();
  const [activeButton, setActiveButton] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setActiveButton(option);
  };

  const handlePriceChange = ({ min, max }) => {
    setPriceRange({ min, max });
  };

  return (
    <div className="flex flex-col justify-between h-[171px]">
      <div className="text-[40px] font-extrabold leading-[46.96px] ">
        <div>Propiedades</div>
        <div className="pt-2">
          <hr className="w-[225px] border-[2px] border-[#A596C8]" />
        </div>
      </div>

      <div className="font-karla text-[24px] text-[#4459A5] leading-[28.06px]">
        Invierte en Finca Raíz en cualquier ciudad de Colombia!
      </div>

      <div className="flex justify-between">
        <FilterButton
          param="Apartamento"
          onSelect={() => handleOptionSelect("Apartamento")}
          isActive={activeButton === "Apartamento"}
        />
        <FilterButton
          param="Casa"
          onSelect={() => handleOptionSelect("Casa")}
          isActive={activeButton === "Casa"}
        />
        <FilterButton
          param="Comercial"
          onSelect={() => handleOptionSelect("Comercial")}
          isActive={activeButton === "Comercial"}
        />
        <FilterButton
          param="Oficinas"
          onSelect={() => handleOptionSelect("Oficinas")}
          isActive={activeButton === "Oficinas"}
        />
      </div>
      <PriceRangeSlider min={0} max={5000} onPriceChange={handlePriceChange} />
    </div>
  );
};

export default Filters;