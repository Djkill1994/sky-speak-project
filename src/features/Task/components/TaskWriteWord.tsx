import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { TaskCard } from "~/features/Task/components/TaskCard";
import { useGetCardApi } from "~/features/Dashboard/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

interface ISubmitForm {
  word?: string;
}

export const TaskWriteWord = () => {
  const { register, handleSubmit } = useForm<ISubmitForm>();
  const { data: taskData, isFetching, refetch } = useGetCardApi();
  const [isSuccessHandler, setIsSuccessHandler] = useState(false);

  const onSubmit: SubmitHandler<ISubmitForm> = (data) => {
    if (taskData!.en_word!.toLowerCase() == data.word?.toLowerCase()) {
      setIsSuccessHandler(true);
    } else {
      console.log("false");
    }
  };

  return (
    <Box margin="auto" display="flex" alignItems="center" height="100vh">
      {isFetching ? (
        <CircularProgress />
      ) : (
        <TaskCard imgSrc={taskData!.img}>
          <Stack justifyContent="center" alignItems="center" gap="20px">
            <Typography fontSize="1.5rem" fontWeight="600">
              {taskData!.ru_word}
            </Typography>
            {!isSuccessHandler ? (
              <Box
                display="flex"
                gap="10px"
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <TextField
                  {...register("word", { required: true })}
                  label={"Введите слово"}
                  autoComplete="off"
                />
                <Button variant="contained" type="submit">
                  Ответить
                </Button>
              </Box>
            ) : (
              <Box display="flex" flexDirection="column" gap="20px">
                <Typography fontSize="1.7rem" fontWeight="600" color="green">
                  {taskData!.en_word}
                </Typography>
                <Button
                  onClick={() => {
                    setIsSuccessHandler(false);
                    refetch();
                  }}
                >
                  Дальше
                </Button>
              </Box>
            )}
          </Stack>
        </TaskCard>
      )}
    </Box>
  );
};
