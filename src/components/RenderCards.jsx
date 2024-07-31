import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card";

const RenderCards = () => {
  //chartData almacena el primer fetch
  const [chartData, setChartData] = useState([]);

  const getChart = async () => {
      try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setChartData(data.results);
    } catch (error) {
      console.error(error);
    }
  };


  //Aqui debemos llamar a la funcion y colocarle un array vacio como segundo parametro
  useEffect(() => {
    getChart();
  }, []);

  console.log(chartData);

  return (
    <div className="grid grid-cols-3 gap-4 m-5">
      {chartData.map((item, index) => {
        return <CardFlag key={index} character={item} index={index +1 }/>;
      })}
    </div>
  );
};

export default RenderCards;
