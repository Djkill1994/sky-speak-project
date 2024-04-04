import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useGetCardApi } from "~/features/Dashboard/api";
import { TaskCard } from "~/features/Task/components/TaskCard";
import { useEffect, useState } from "react";
import { TaskContentContainer } from "~/features/Task/components/TaskContentContainer";
import { useAnswerOptions, useErrorHandler } from "~/features/Task/helpers";

export const TaskSpellOut = () => {
  const { data, isFetching, refetch } = useGetCardApi();
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [secretWordLetters, setSecretWordLetters] = useState<string[]>([]);
  const { isAnswerOptions, optionsTrue, optionsFalse } = useAnswerOptions();
  const { isErrorHandler, noError, error } = useErrorHandler();

  useEffect(() => {
    if (data) {
      setSecretWordLetters(
        data?.en_word?.split("")?.sort(() => Math.random() - 0.5) || [],
      );
    }
  }, [data]);

  useEffect(() => {
    if (secretWordLetters.length === 0 && selectedLetters.length > 0) {
      const test = selectedLetters.join("");
      optionsTrue();
      setSelectedLetters([]);
      test === data?.en_word ? noError() : error();
    }
  }, [secretWordLetters, selectedLetters]);

  return (
    <Box>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <TaskCard imgSrc={data!.img}>
          <Stack alignItems="center">
            <Typography fontSize="1.7rem" fontWeight="600">
              {data?.ru_word}
            </Typography>
            {!isAnswerOptions ? (
              <Stack gap="30px" alignItems="center">
                <Stack flexDirection="row" gap="10px" alignItems="center">
                  {data?.en_word?.split("")?.map((_, index) => (
                    <TaskContentContainer
                      key={index}
                      children={selectedLetters[index]}
                      bgColor={"#b9b9b9"}
                      onClick={() => {
                        if (selectedLetters[index]) {
                          setSelectedLetters(
                            selectedLetters.filter((_, idx) => idx !== index),
                          );
                          setSecretWordLetters((prevState) => [
                            ...prevState,
                            selectedLetters[index],
                          ]);
                        }
                      }}
                    />
                  ))}
                </Stack>
                <Stack flexDirection="row" gap="10px" alignItems="center">
                  {secretWordLetters?.map((value, index) => (
                    <TaskContentContainer
                      key={index}
                      children={value}
                      onClick={() => {
                        setSelectedLetters((prevState) => [
                          ...prevState,
                          value,
                        ]);
                        setSecretWordLetters((prevState) =>
                          prevState.filter(
                            (_, prevIndex) => index !== prevIndex,
                          ),
                        );
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            ) : (
              <Stack alignItems="center" gap="20px" m="20px">
                <Typography
                  fontSize="2rem"
                  fontWeight="600"
                  color={isErrorHandler ? "red" : "green"}
                >
                  {data?.en_word}
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
