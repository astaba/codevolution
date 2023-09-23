import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => axios("http://localhost:4000/superheroes");

const RQSuperHeroes = () => {
  const [pollingLapse, setPollingLapse] = useState(3000);

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
    const superheroes = data.data;
    if (superheroes.length > 3) {
      setPollingLapse(false);
    } else {
      setPollingLapse(3000);
    }
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
    setPollingLapse(false);
  };

  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
      refetchInterval: pollingLapse,
      refetchIntervalInBackground: true,
    }
  );
  console.log({ isLoading, isFetching });

  // if (isLoading || isFetching) {
  if (isLoading) {
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
