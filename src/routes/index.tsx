import { createFileRoute } from "@tanstack/react-router";
import { Home } from "~/features/Home/components/Home";

const Index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
