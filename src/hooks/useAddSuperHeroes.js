import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useAddSuperHeroes = () => {
  return useMutation({
    mutationFn: (payload) => {
      return axios.post("http://localhost:4000/superheroes", payload);
    },
  });
};

export default useAddSuperHeroes;
