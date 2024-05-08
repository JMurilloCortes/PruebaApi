import React from "react";

const FilterButtoms = ({param}) => {
  return (
    <div className="w-[163px] h-[37px] border-[1px] border-[#181F39] font-medium text-[20px] text-center rounded-[7px] flex items-center justify-center hover:bg-[#181F39] active:bg-green-400 hover:text-white hover:cursor-pointer">
      {param}
    </div>
  );
};

export default FilterButtoms;
