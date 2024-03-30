import { Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { authGuard } from "~/features/Auth/helpers";
import { TaskBoard } from "~/features/Task/components";

const TaskTaskname = () => {
  return (
    <Box>
      <TaskBoard />
    </Box>
  );
};

export const Route = createFileRoute(`/task/$taskname`)({
  component: TaskTaskname,
  beforeLoad: ({ location }) => authGuard(location),
});
