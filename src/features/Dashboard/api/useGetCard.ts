import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

// interface IUseGetCard {
//   id: string;
//   img: string;
//   en_word: string;
//   ru_word: string;
// }

export const useGetCard = () =>
  useQuery({
    queryKey: [ApiKeys.getCard],
    queryFn: async () => {
      const { data } = await supabaseClient.from("card").select();
      return data;
    },
  });
