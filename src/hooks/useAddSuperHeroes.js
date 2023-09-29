import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useAddSuperHeroes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => {
      return axios.post("http://localhost:4000/superheroes", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["super-heroes"] });
    },
  });
};

export default useAddSuperHeroes;
