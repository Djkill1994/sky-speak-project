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
  const { register, handleSubmit, resetField } = useForm<ISubmitForm>();

  const { data: taskData, isFetching, refetch } = useGetCardApi();
  const [isAnswerOptions, setIsAnswerOptions] = useState(false);
  const [isErrorHandler, setIsErrorHandler] = useState(false);

  const onSubmit: SubmitHandler<ISubmitForm> = (data) => {
    setIsAnswerOptions(true);
    if (taskData!.en_word!.toLowerCase() == data.word?.toLowerCase()) {
      setIsErrorHandler(false);
      resetField("word");
    } else {
      setIsErrorHandler(true);
      resetField("word");
    }
  };

  return (
    <Box>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <TaskCard imgSrc={taskData!.img}>
          <Stack justifyContent="center" alignItems="center" gap="20px">
            <Typography fontSize="1.5rem" fontWeight="600">
              {taskData!.ru_word}
            </Typography>
            {!isAnswerOptions ? (
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
                <Typography
                  fontSize="1.7rem"
                  fontWeight="600"
                  color={isErrorHandler ? "red" : "green"}
                >
                  {taskData!.en_word}
                </Typography>
                <Button
                  onClick={() => {
                    setIsAnswerOptions(false);
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
