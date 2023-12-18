import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios-utils";

const useAddSuperHeroes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newHero) => {
      return request({
        url: "/superheroes",
        method: "POST",
        data: newHero,
      });
    },
    onMutate: async (newHero) => {
      // Cancel any outgoing refetches
      // To make sure it does not overwrite our optimistic update
      await queryClient.cancelQueries({ queryKey: ["super-heroes"] });
      // Snapshot the previous values
      const previousHeroes = queryClient.getQueryData(["super-heroes"]);
      // Optimistically update the new value
      queryClient.setQueryData(["super-heroes"], (currentHeroes) => {
        return {
          ...currentHeroes,
          data: [
            ...currentHeroes.data,
            { id: currentHeroes?.data?.length + 1, ...newHero },
          ],
        };
      });
      // Return a context object with the snapshotted value
      return {
        previousHeroes,
      };
    },
    // If the mutation fail
    // Roll back the UI using the returned context
    onError: (_error, _variables, context) => {
      queryClient.setQueryData(["super-heroes"], context.previousHeroes);
    },
    // Regardless of mutation error or success
    // Always refetch to make sure client is sync with server
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["super-heroes"] });
    },
  });
};

export default useAddSuperHeroes;
