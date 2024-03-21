import { createFileRoute } from "@tanstack/react-router";
import { DashboardAdmin } from "~/features/Dashboard/components";

const Admin = () => {
  return (
    <>
      <DashboardAdmin />
    </>
  );
};

export const Route = createFileRoute("/admin")({
  component: Admin,
});
