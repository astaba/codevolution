import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios("http://localhost:4000/superheroes");

const RQSuperHeroes = () => {
  const { isLoading, isFetching, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      refetchInterval: 2000,
      refetchIntervalInBackground: true,
    }
  );
  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
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