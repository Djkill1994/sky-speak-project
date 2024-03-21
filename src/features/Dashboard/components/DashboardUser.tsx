import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useGetCard } from "~/features/Dashboard/api";

export const DashboardUser = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCard();
  console.log(data);
  return (
    <Box margin="8px">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack flexDirection="row" gap="8px">
          {/*{data?.map(() => (*/}
          {/*  <CardItem index={id} imgSrc={img} text1={text1} text2={text2} />*/}
          {/*))}*/} HI
        </Stack>
      )}
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
    </Box>
  );
};
