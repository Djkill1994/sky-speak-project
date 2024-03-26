import { createFileRoute } from "@tanstack/react-router";
import { authGuard } from "~/features/Auth/helpers";
import { DashboardCardCollection } from "~/features/Dashboard/components";

const CollectionCollectionId = () => {
  return (
    <>
      <DashboardCardCollection />
    </>
  );
};

export const Route = createFileRoute(`/collection/$collectionId`)({
  component: CollectionCollectionId,
  beforeLoad: ({ location }) => authGuard(location),
});
