import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useGetCollectionsApi } from "~/features/Dashboard/api";
import { CollectionCards } from "~/libs/ui-kit";
import { supabaseClient } from "~/libs/core";

export const DashboardUser = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCollectionsApi();

  return (
    <Box margin="8px">
      <Button
        onClick={async () => {
          await supabaseClient.auth.signOut();
          await navigate({ to: "/" });
        }}
      >
        Exit
      </Button>
      <Button onClick={() => console.log("LOL")}>Random card</Button>
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
