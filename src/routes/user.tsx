import { createFileRoute } from "@tanstack/react-router";
import { authGuard } from "~/features/Auth/helpers";
import { DashboardUser } from "~/features/Dashboard/components";

const User = () => {
  return (
    <>
      <DashboardUser />
    </>
  );
};

export const Route = createFileRoute("/user")({
  component: User,
  beforeLoad: ({ location }) => authGuard(location),
});
