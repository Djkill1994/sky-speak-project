import { createFileRoute } from "@tanstack/react-router";
import { AuthLoginForm } from "~/features/Auth/components";

const Login = () => {
  return (
    <>
      <AuthLoginForm />
    </>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});
