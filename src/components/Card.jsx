import React, { useState, useEffect} from 'react'

const Card = ({ character, index }) => {
  const [homeworld, setHomeworld] = useState([]);

  const getLocation = async () => {
    try {
      const response = await fetch(character.homeworld);
      const dataLocation = await response.json();
      setHomeworld(dataLocation.name);
    } catch (error) {
      console.error("Error para obtener los datos: ", error);
    }
    getLocation();
  };

  useEffect(() => {
    getLocation();
  }, []);



  return (
    <div className="bg-yellow-600 grid-cols-2 h-[350px]box-border ">
      <div className="flex justify-center items-center  w-[200px] h-[210px] m-5  border-black border border-solid">
        <h1 className="flex justify-center content-center w-10 h-8">
          ({index})
        </h1>
      </div>
      <div className="bg-[#FFFFE0] flex flex-col items-center gap-3 p-2">
        <h2 className="m-0 p-0 text-lg font-bold">{character.name}</h2>
        <h2 className="m-0 p-0 text-lg font-bold">lives in {homeworld}</h2>
        <div className="flex justify-between gap-4">
          <p>Altura: {character.height}</p>
          <p>Mass: {character.mass}</p>
        </div>
      </div>
    </div>
  );
};

export default Card
