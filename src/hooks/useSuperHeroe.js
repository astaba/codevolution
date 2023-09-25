import { useQuery } from "react-query";
import axios from "axios";

// const fetchSuperHeroe = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

// const useSuperHeroe = (heroId) => {
//   return useQuery(["super-heroe", heroId], () => fetchSuperHeroe(heroId));
// };

/*
Now Take advantage of the fact that the queryKey is a member of
the default object parameter of the queryFunction
*/

const fetchSuperHeroe = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroe = (heroId) => {
  return useQuery(["super-heroe", heroId], fetchSuperHeroe);
};

export default useSuperHeroe;
