import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => axios("http://localhost:4000/superheroes");

const useSuperHeroes = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    select: (data) => {
      const heroNames = data.data.map((hero) => hero.name);
      return heroNames;
    },
  });
};

export default useSuperHeroes;
