import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroe = (heroId) => {
  return axios.get("http://localhost:4000/superheroes/" + heroId);
};

const RQDynamicParallel = ({ heroesId }) => {
  const queryResults = useQueries({
    queries: heroesId.map((id) => ({
      queryKey: ["superheroes", id],
      queryFn: () => fetchSuperHeroe(id),
    })),
  });
  console.log(queryResults);

  return <div>RQDynamicParallel</div>;
};

export default RQDynamicParallel;
