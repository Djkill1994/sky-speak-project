import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

export const useGetCardApi = () =>
  useQuery({
    queryKey: [ApiKeys.getCard],
    queryFn: async () =>
      supabaseClient
        .from("random_card")
        .select("img, en_word, ru_word")
        .limit(1)
        .single()
        .then(({ data }) => data),
  });
