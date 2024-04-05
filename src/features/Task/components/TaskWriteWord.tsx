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
import { useErrorHandler } from "~/features/Task/helpers/useErrorHandler";
import { useAnswerOptions } from "~/features/Task/helpers/useAnswerOptions";
import { speakText } from "~/libs/utils";

interface ISubmitForm {
  word?: string;
}

export const TaskWriteWord = () => {
  const { register, handleSubmit, resetField } = useForm<ISubmitForm>();

  const { data: taskData, isFetching, refetch } = useGetCardApi();
  const { isAnswerOptions, optionsTrue, optionsFalse } = useAnswerOptions();
  const { isErrorHandler, noError, error } = useErrorHandler();

  const onSubmit: SubmitHandler<ISubmitForm> = (data) => {
    optionsTrue();
    if (taskData!.en_word!.toLowerCase() == data.word?.toLowerCase()) {
      noError();
      speakText(taskData?.en_word || "");
      resetField("word");
    } else {
      error();
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
              <Stack alignItems="center" gap="20px">
                <Typography
                  fontSize="1.7rem"
                  fontWeight="600"
                  color={isErrorHandler ? "red" : "green"}
                >
                  {taskData!.en_word}
                </Typography>
                <Button
                  onClick={() => {
                    optionsFalse();
                    refetch();
                  }}
                >
                  Дальше
                </Button>
              </Stack>
            )}
          </Stack>
        </TaskCard>
      )}
    </Box>
  );
};
