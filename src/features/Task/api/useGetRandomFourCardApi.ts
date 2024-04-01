import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

export const useGetRandomFourCardApi = () =>
  useQuery({
    queryKey: [ApiKeys.getCard],
    queryFn: async () =>
      supabaseClient
        .from("random_card")
        .select("img, en_word, ru_word, id")
        .limit(4)
        .then(({ data }) => data),
  });
