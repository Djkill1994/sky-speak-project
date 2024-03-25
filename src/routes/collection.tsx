import { createFileRoute } from "@tanstack/react-router";
import { authGuard } from "~/features/Auth/helpers";
import { DashboardCardCollection } from "~/features/Dashboard/components";

const Collection = () => {
  return (
    <>
      <DashboardCardCollection />
    </>
  );
};

export const Route = createFileRoute(`/collection`)({
  component: Collection,
  beforeLoad: ({ location }) => authGuard(location),
});
