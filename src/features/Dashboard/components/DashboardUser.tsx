import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useGetCollectionsApi } from "~/features/Dashboard/api";
import { CollectionCards } from "~/libs/ui-kit";
import { supabaseClient } from "~/libs/core";
import { ModalCardItem } from "~/libs/ui-kit/ModalCardItem";
import { useModal } from "~/libs/utils";

export const DashboardUser = () => {
  const navigate = useNavigate();
  const { data, isFetching } = useGetCollectionsApi();
  const { isOpened, open, close } = useModal();

  return (
    <Box margin="8px">
      {isOpened && <ModalCardItem onClose={close} />}
      <Button
        onClick={async () => {
          await supabaseClient.auth.signOut();
          await navigate({ to: "/" });
        }}
      >
        Exit
      </Button>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Stack flexDirection="row" gap="8px">
          {data?.map(({ img, id, name }) => (
            <CollectionCards key={id} id={id} imgSrc={img} name={name} />
          ))}
        </Stack>
      )}
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
      <Button onClick={() => open()}>Random Card</Button>
      <Button
        onClick={() =>
          navigate({
            to: "/task/$taskname",
            params: { taskname: "write-word" },
          })
        }
      >
        запиши слово
      </Button>
      <Button
        onClick={() =>
          navigate({
            to: "/task/$taskname",
            params: { taskname: "choose-correctly" },
          })
        }
      >
        выбери правильное слово
      </Button>
    </Box>
  );
};
