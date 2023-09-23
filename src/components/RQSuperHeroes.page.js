import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios("http://localhost:4000/superheroes");

const RQSuperHeroes = () => {
  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      enabled: false,
    }
  );
  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;