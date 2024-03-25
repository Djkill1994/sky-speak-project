import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useGetCollectionsApi } from "~/features/Dashboard/api";
import { CollectionCards } from "~/libs/ui-kit";

export const DashboardUser = () => {
  const navigate = useNavigate();
  // const { data, isLoading } = useGetCardApi();
  const { data, isLoading } = useGetCollectionsApi();
  console.log(data);
  // const { data, isLoading } = useCurrentUserApi();

  return (
    <Box margin="8px">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack flexDirection="row" gap="8px">
          {data?.map(({ img, id, name }) => (
            <CollectionCards key={id} id={id} imgSrc={img} name={name} />
          ))}
        </Stack>
      )}
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
    </Box>
  );
};
