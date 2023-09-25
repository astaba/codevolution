import useSuperHeroes from "../hooks/useSuperHeroes";

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useSuperHeroes({
    onSuccess,
    onError,
  });

  function onSuccess(data) {
    console.log("Perform side effect after data fetching", data);
  }
  function onError(error) {
    console.log("Perform side effect after encountering error", error);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
};

export default RQSuperHeroes;
