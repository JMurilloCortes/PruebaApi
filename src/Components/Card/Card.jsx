import React from "react";
import CardButtom from "../Buttoms/CardButtom";
import ProgressBar from "../ProgressBar/ProgressBar";
import Peso from "../../assets/Peso";
import Loalization from "../../assets/Loalization";

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Card = ({ item }) => {
  // Obtener las primeras cuatro palabras de la dirección
  const addressWords = item.address.split(" ").slice(0, 4).join(" ").slice(0, -1);

  // Encontrar el precio mínimo y máximo
  let minPrice = parseFloat(item.prices[0].replace(/[$,]/g, ''));
  let maxPrice = parseFloat(item.prices[0].replace(/[$,]/g, ''));

  item.prices.forEach(price => {
    const numericPrice = parseFloat(price.replace(/[$,]/g, ''));
    if (numericPrice < minPrice) {
      minPrice = numericPrice;
    }
    if (numericPrice > maxPrice) {
      maxPrice = numericPrice;
    }
  });

  // Formatear los precios de nuevo con el signo de dólar, la coma y dos decimales
  minPrice = `$${formatNumberWithCommas(minPrice.toFixed(2))}`;
  maxPrice = `$${formatNumberWithCommas(maxPrice.toFixed(2))}`;

  return (
    <div className="w-[440px] h-[568px] rounded-[30px] border-[1px] border-[#181F39]">
      <img src={item.img} alt="" className="w-full h-[310px] rounded-t-[30px]"/>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <Loalization />
          <h2 className="font-karla font-bold text-[20px]">
            {addressWords}
          </h2>
        </div>
        <p className="text-[16px] ml-5">
          {item.city}
        </p>
        <div className="flex items-center gap-[10px]">
          <Peso />
          <p className="font-karla font-bold text-[20px]">
            {item.profitability}% EA
          </p>
        </div>
        <p className="text-[16px] ml-5">
          {minPrice} - {maxPrice} Por Fracción
        </p>
      </div>
      <div className="flex justify-center pb-1 pt-1">
        <ProgressBar totalFracttions={item.totalFracttions} soldFracttions={item.soldFracttions} />
      </div>
      <div className="flex justify-center text-[10px] pb-4">
        Vendido
      </div>
      <div className="flex justify-center">
        <CardButtom param="Detalle" />
      </div>
    </div>
  );
};

export default Card;
