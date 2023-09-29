import { Link } from "react-router-dom";
import useSuperHeroes from "../hooks/useSuperHeroes";
import { useState } from "react";
import useAddSuperHeroes from "../hooks/useAddSuperHeroes";

function onSuccess(data) {
  console.log("Perform side effect after data fetching", data);
}
function onError(error) {
  console.log("Perform side effect after encountering error", error);
}

const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { isLoading, data, isError, error, refetch } = useSuperHeroes({
    onSuccess,
    onError,
  });

  const {
    mutate: addHero,
    status: addStatus,
    error: addError,
    data: addData,
    reset: addReset,
  } = useAddSuperHeroes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !alterEgo.trim()) return;
    addHero({ name, alterEgo });
    setName("");
    setAlterEgo("");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          placeholder="alter ego"
        />
        <button type="submit">Add Hero</button>
      </form>
      <br />
      <div>
        <button onClick={refetch}>Fetch Heroes</button>
      </div>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`${hero.id}`}>{hero.name}</Link>
        </div>
      ))}{" "}
      {addStatus === "loading" ? (
        <p>Adding heroes...</p>
      ) : (
        <>
          {addStatus === "error" ? (
            <p onClick={() => addReset()}>
              An error occured: {addError.message}
            </p>
          ) : null}
          {addStatus === "success" ? (
            <p onClick={() => addReset()}>
              <b>{addData?.data.name}</b> superheroe added!
            </p>
          ) : null}
        </>
      )}
    </>
  );
};

export default RQSuperHeroes;
