import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => axios("http://localhost:4000/superheroes");

const useSuperHeroes = ({ enabled = true, onSuccess, onError }) => {
  return useQuery({
    queryKey: ["super-heroes"],
    queryFn: fetchSuperHeroes,
    enabled,
    onSuccess,
    onError,
    // select: (data) => {
    //   const heroNames = data.data.map((hero) => hero.name);
    //   return heroNames;
    // },
  });
};

export default useSuperHeroes;
