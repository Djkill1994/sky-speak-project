import { createFileRoute } from "@tanstack/react-router";
import { UserDashboard } from "~/features/UserDashboard/components/UserDashboard";

const User = () => {
  return (
    <>
      <UserDashboard />
    </>
  );
};

export const Route = createFileRoute("/user")({
  component: User,
});
