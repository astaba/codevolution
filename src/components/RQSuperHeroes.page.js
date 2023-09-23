import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios("http://localhost:4000/superheroes");

const RQSuperHeroes = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
