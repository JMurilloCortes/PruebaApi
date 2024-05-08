import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const apiUrl = import.meta.env.VITE_API_URL;

const Cards = () => {
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
  return (
    <div className="flex flex-wrap gap-[19px] w-[1358px]">
      {items.map((item) => (
        <div key={item.index}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
