import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { TaskCard } from "~/features/Task/components/TaskCard";
import { useGetRandomFourCardApi } from "~/features/Task/api/useGetRandomFourCardApi";
import {
  shuffleArray,
  useAnswerOptions,
  useErrorHandler,
} from "~/features/Task/helpers";

export const TaskChooseCorrectly = () => {
  const { data, isFetching, refetch } = useGetRandomFourCardApi();
  const { isAnswerOptions, optionsTrue, optionsFalse } = useAnswerOptions();
  const { isErrorHandler, noError, error } = useErrorHandler();

  const shuffledData = shuffleArray(data || []);

  const onSubmit = (value: string) => {
    optionsTrue();
    if (data![0].en_word === value) {
      noError();
    } else {
      error();
    }
  };

  return (
    <Box>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <TaskCard imgSrc={data![0].img}>
          <Stack m="45px 5px">
            {isAnswerOptions ? (
              <Stack m="auto" alignItems="center">
                <Typography fontSize="1.7rem" fontWeight="600">
                  {data![0].ru_word}
                </Typography>
                <Typography
                  color={isErrorHandler ? "red" : "green"}
                  fontSize="2rem"
                  fontWeight="600"
                >
                  {data![0].en_word}
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
            ) : (
              <Grid container rowSpacing={1} columnSpacing={1}>
                {shuffledData?.map(({ en_word, id }) => (
                  <Grid item xs={6} key={id}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        onSubmit(en_word!);
                      }}
                    >
                      {en_word}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            )}
          </Stack>
        </TaskCard>
      )}
    </Box>
  );
};
