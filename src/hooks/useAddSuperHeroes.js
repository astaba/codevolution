import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useAddSuperHeroes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => {
      return axios.post("http://localhost:4000/superheroes", payload);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["super-heroes"], (superHeroesOldData) => {
        return {
          ...superHeroesOldData,
          data: [...superHeroesOldData.data, data.data],
        };
      });
    },
  });
};

export default useAddSuperHeroes;
