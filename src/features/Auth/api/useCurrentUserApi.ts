import { useQuery } from "@tanstack/react-query";
import { ApiKeys, supabaseClient } from "~/libs/core";

export const useCurrentUserApi = (id: string) =>
  useQuery({
    queryKey: [ApiKeys.currentUser, id],
    queryFn: async () => {
      const { data } = await supabaseClient.auth.getUser(id);

      return {
        email: data.user?.email,
        userName: data.user?.user_metadata.userName,
      };
    },
  });
