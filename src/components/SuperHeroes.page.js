import { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:4000/superheroes").then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>SuperHeroes</h2>
      {data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
};

export default SuperHeroes;
