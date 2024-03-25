import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

export const useGetCardCollectionApi = (id: number) =>
  useQuery({
    queryKey: [ApiKeys.getCardCollection],
    queryFn: async () =>
      supabaseClient
        .from("collections")
        .select(`card(id, img, ru_word, en_word)`)
        .eq("collection_id", `${id}`)
        .then(({ data }) => data),
  });
