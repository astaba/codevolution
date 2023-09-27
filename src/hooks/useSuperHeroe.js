import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroe = ({ queryKey }) => {
  const [_key, heroId] = queryKey;
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroe = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["super-heroe", heroId],
    queryFn: fetchSuperHeroe,
    initialData: () => {
      const initData = queryClient
        .getQueryData(["super-heroes"])
        ?.data.find((hero) => hero.id === parseInt(heroId));
      if (initData) {
        return { data: initData };
      }
      return undefined;
    },
  });
};

export default useSuperHeroe;
