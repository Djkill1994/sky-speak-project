import { createFileRoute } from "@tanstack/react-router";
import { AuthRegistrationForm } from "~/features/Auth/components";

const Login = () => {
  return (
    <>
      <AuthRegistrationForm />
    </>
  );
};

export const Route = createFileRoute("/registration")({
  component: Login,
});
