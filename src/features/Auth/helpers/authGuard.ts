import { ParsedLocation, redirect } from "@tanstack/react-router";
import { supabaseClient } from "~/libs/core";

export const authGuard = async (location: ParsedLocation) => {
  const { data } = await supabaseClient.auth.getSession();
  if (!data?.session) {
    throw redirect({
      to: "/login",
      search: {
        redirect: location.href,
      },
    });
  }
};
