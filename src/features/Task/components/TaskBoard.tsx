import { AppBar, Box, Button } from "@mui/material";
import { TaskChooseCorrectly } from "~/features/Task/components/TaskChooseCorrectly";
import { TaskWriteWord } from "~/features/Task/components/TaskWriteWord";
import { useParams, useRouter } from "@tanstack/react-router";

export const TaskBoard = () => {
  const { taskname } = useParams({ from: "/task/$taskname" });
  const { history } = useRouter();
  return (
    <Box>
      <AppBar>
        <Button variant="contained" onClick={() => history.back()}>
          Вернутся
        </Button>
      </AppBar>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {taskname === "write-word" && <TaskWriteWord />}
        {taskname === "choose-correctly" && <TaskChooseCorrectly />}
      </Box>
    </Box>
  );
};
