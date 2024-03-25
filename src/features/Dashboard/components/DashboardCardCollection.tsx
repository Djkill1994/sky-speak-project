import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useGetCardCollectionApi } from "~/features/Dashboard/api";
import { CardItem } from "~/libs/ui-kit";

export const DashboardCardCollection = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCardCollectionApi(1);
  console.log(data);

  return (
    <Box margin="8px">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack flexDirection="row" gap="8px">
          {data?.map(({ card }) => (
            <CardItem
              key={card.id}
              imgSrc={card.img}
              ru_word={card.ru_word}
              en_word={card.en_word}
            />
          ))}
        </Stack>
      )}
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
    </Box>
  );
};
