import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useGetCardApi } from "~/features/Dashboard/api";
import { CardItem } from "~/libs/ui-kit";

export const DashboardUser = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCardApi();
  // const { data, isLoading } = useCurrentUserApi();

  console.log(data?.map(({ collection }) => collection.name));
  return (
    <Box margin="8px">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack flexDirection="row" gap="8px">
          {data?.map(({ id, img, en_word, ru_word }) => (
            <CardItem key={id} imgSrc={img} text1={en_word} text2={ru_word} />
          ))}
        </Stack>
      )}
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
    </Box>
  );
};
