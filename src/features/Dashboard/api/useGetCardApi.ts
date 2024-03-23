import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

// interface IUseGetCard {
//   id: string;
//   img: string;
//   en_word: string;
//   ru_word: string;
// }

export const useGetCardApi = () =>
  useQuery({
    queryKey: [ApiKeys.getCard],
    queryFn: async () =>
      supabaseClient
        .from("collections")
        .select(`collection (name)  `)
        .then(({ data }) => data),
  });
