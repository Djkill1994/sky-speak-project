import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "~/features/AdminDashboard/components/AdminDashboard";

const Admin = () => {
  return (
    <>
      <AdminDashboard />
    </>
  );
};

export const Route = createFileRoute("/admin")({
  component: Admin,
});
