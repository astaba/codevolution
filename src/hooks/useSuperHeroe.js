import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const fetchSuperHeroe = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

// const useSuperHeroe = (heroId) => {
//   return useQuery(["super-heroe", heroId], () => fetchSuperHeroe(heroId));
// };

/*
Now Take advantage of the fact that the queryKey is a member of
the default object parameter (QueryFunctionContex) of the queryFunction
*/

const fetchSuperHeroe = ({ queryKey }) => {
  const [_key, heroId] = queryKey;
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroe = (heroId) => {
  return useQuery({
    queryKey: ["super-heroe", heroId],
    queryFn: fetchSuperHeroe,
  });
};

export default useSuperHeroe;
