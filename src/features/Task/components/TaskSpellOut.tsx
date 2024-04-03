import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useGetCardApi } from "~/features/Dashboard/api";
import { TaskCard } from "~/features/Task/components/TaskCard";
import { useEffect, useState } from "react";

export const TaskSpellOut = () => {
  const { data, isFetching, refetch } = useGetCardApi();
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [secretWordLetters, setSecretWordLetters] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setSecretWordLetters(
        data?.en_word?.split("")?.sort(() => Math.random() - 0.3) || [],
      );
    }
  }, [data]);

  return (
    <Box>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <TaskCard imgSrc={data!.img}>
          <Stack alignItems="center">
            <Typography
              fontSize="1.7rem"
              fontWeight="600"
              // color={isErrorHandler ? "red" : "green"}
            >
              {data?.ru_word}
            </Typography>
            <Stack gap="30px" alignItems="center">
              <Stack flexDirection="row" gap="10px" alignItems="center">
                {data?.en_word?.split("")?.map((_, index) => (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid black"
                    borderRadius="4px"
                    width="35px"
                    height="35px"
                    key={index}
                    bgcolor="#b9b9b9"
                  >
                    {selectedLetters[index]}
                  </Stack>
                ))}
              </Stack>
              <Stack flexDirection="row" gap="10px" alignItems="center">
                {secretWordLetters?.map((value, index) => (
                  <Stack
                    width="35px"
                    height="35px"
                    alignItems="center"
                    justifyContent="center"
                    border="1px solid black"
                    borderRadius="4px"
                    key={index}
                    onClick={() => {
                      setSelectedLetters((prevState) => [...prevState, value]);
                      setSecretWordLetters((prevState) =>
                        prevState.filter((_, prevIndex) => index !== prevIndex),
                      );
                    }}
                  >
                    {value}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </TaskCard>
      )}
    </Box>
  );
};
