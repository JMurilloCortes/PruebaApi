import React from "react";
import FilterButtoms from "../Buttoms/FilterButtom";

const Filters = () => {
  return (
    <div className="flex flex-col justify-between h-[171px]">
      <div className="text-[40px] font-extrabold leading-[46.96px] ">
        <div>
          Propiedades
          </div>
          <div className="pt-2">
            <hr className="w-[225px] border-[2px] border-[#A596C8]"/>
          </div>
      </div>

      <div className="font-karla text-[24px] text-[#4459A5] leading-[28.06px]">
        Invierte en Finca Raíz en cualquier ciudad de Colombia!
      </div>

      <div className="flex justify-between">
        <FilterButtoms param="Apartamento"/>
        <FilterButtoms param="Casa"/>
        <FilterButtoms param="Comercial"/>
        <FilterButtoms param="Oficinas"/>
      </div>
    </div>
  );
};

export default Filters;
