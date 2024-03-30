import { Box } from "@mui/material";
import { TaskChooseCorrectly } from "~/features/Task/components/TaskChooseCorrectly";
import { TaskWriteWord } from "~/features/Task/components/TaskWriteWord";
import { useParams } from "@tanstack/react-router";

export const TaskBoard = () => {
  const { taskname } = useParams({ from: "/task/$taskname" });
  return (
    <Box display="flex">
      {taskname === "write-word" && <TaskWriteWord />}
      {taskname === "choose-correctly" && <TaskChooseCorrectly />}
    </Box>
  );
};
