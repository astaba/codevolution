import useSuperHeroes from "../hooks/useSuperHeroes";

const RQPracticeHook = () => {
  const { isInitialLoading, status, data, error, refetch, isRefetching } =
    useSuperHeroes({
      enabled: false,
      onSuccess,
      onError,
    });

  function onSuccess(data) {
    console.log("Perform side effect after data fetching", data);
  }
  function onError(error) {
    console.log("Perform side effect after encountering error", error);
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {status === "success" ? (
        data.data.map((hero) => <div key={hero.id}>{hero.name}</div>)
      ) : status === "error" ? (
        <h3>Error: {error.message}</h3>
      ) : isInitialLoading ? (
        <h3>Loading...</h3>
      ) : (
        <p>Not ready...</p>
      )}
      <div>{isRefetching ? "Fetching..." : null}</div>
    </>
  );
};

export default RQPracticeHook;
