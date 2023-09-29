import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const fetchSuperHeroes = () => {
  return request({ url: "superheroes/" });
};

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
