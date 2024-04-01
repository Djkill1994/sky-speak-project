import { Box, Button, CircularProgress, Grid, Stack } from "@mui/material";
import { TaskCard } from "~/features/Task/components/TaskCard";
import { useGetRandomFourCardApi } from "~/features/Task/api/useGetRandomFourCardApi";

export const TaskChooseCorrectly = () => {
  const { data, isFetching } = useGetRandomFourCardApi();

  return (
    <Box>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <TaskCard imgSrc={data![0].img}>
          <Stack m="45px 5px">
            {/*<Typography fontSize="1.5rem" fontWeight="600">*/}
            {/*  {data![0].ru_word}*/}
            {/*</Typography>*/}
            <Grid container rowSpacing={1} columnSpacing={1}>
              {data?.map(({ en_word, id }) => (
                <Grid item xs={6} key={id}>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => console.log(en_word)}
                  >
                    {en_word}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </TaskCard>
      )}
    </Box>
  );
};
