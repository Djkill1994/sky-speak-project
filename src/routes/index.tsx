import { createFileRoute } from "@tanstack/react-router";
import { Home } from "~/libs/ui-kit";
import { authCheck } from "~/features/Auth/helpers/authCheck";

const Index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: ({ location }) => authCheck(location),
});
