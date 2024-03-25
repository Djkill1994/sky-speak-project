import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

export const useGetCollectionsApi = () =>
  useQuery({
    queryKey: [ApiKeys.getCollections],
    queryFn: async () =>
      supabaseClient
        .from("collection")
        .select()
        .then(({ data }) => data),
  });
