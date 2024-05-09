import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { useStore } from "../../state/useState";

const apiUrl = import.meta.env.VITE_API_URL;

const Cards = () => {
  const { selectedOption, minPrice, maxPrice } = useStore(); // Obtener la opción seleccionada y los rangos de precios del estado global
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Filtrar las tarjetas según la opción seleccionada y el rango de precios
  const filteredItems = items.filter((item) => {
    // Filtrar por tipo de propiedad
    switch (selectedOption) {
      case "Casa":
        if (item.type !== 0) return false;
        break;
      case "Apartamento":
        if (item.type !== 1) return false;
        break;
      case "Oficinas":
        if (item.type !== 2) return false;
        break;
      case "Comercial":
        if (item.type !== 3) return false;
        break;
      default:
        break;
    }

    // Filtrar por rango de precios
    if (minPrice !== null || maxPrice !== null) {
      const prices = item.prices.map((price) =>
        parseFloat(price.replace(/[^\d.-]/g, ""))
      );
      const minPriceMatch =
        minPrice === null || Math.min(...prices) >= minPrice;
      const maxPriceMatch =
        maxPrice === null || Math.max(...prices) <= maxPrice;
      return minPriceMatch && maxPriceMatch;
    }

    return true;
  });

  return (
    <div className="flex flex-wrap gap-[19px] w-[1358px]">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.index}>
            <Card item={item} />
          </div>
        ))
      ) : (
        <div className="w-screen h-[600px] flex justify-center text-center items-center">
          <h1 className="text-xl">No hay resultados para los filtros aplicados.</h1>
        </div>
      )}
    </div>
  );
};

export default Cards;
