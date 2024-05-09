import React from "react";

const FilterButton = ({ param, onSelect, isActive }) => {
  return (
    <div
      className={`w-[163px] h-[37px] border-[1px] border-[#181F39] font-medium text-[20px] text-center rounded-[7px] flex items-center justify-center hover:bg-[#2d3c72] hover:text-white hover:cursor-pointer ${
        isActive ? "bg-[#181F39] text-white" : ""
      }`}
      onClick={onSelect}
    >
      {param}
    </div>
  );
};

export default FilterButton;
