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
      <Box padding="20px">
        {isFetching ? (
          <CircularProgress />
        ) : (
          <Stack flexDirection="row" gap="8px">
            {data?.map(({ img, id, name }) => (
              <CollectionCards key={id} id={id} imgSrc={img} name={name} />
            ))}
          </Stack>
        )}
      </Box>
      <Stack flexDirection="row" gap="10px">
        <Button variant="contained" onClick={() => navigate({ to: "/" })}>
          Home
        </Button>
        <Button variant="contained" onClick={() => open()}>
          Случайная карточка
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            navigate({
              to: "/task/$taskname",
              params: { taskname: "write-word" },
            })
          }
        >
          Запиши слово
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            navigate({
              to: "/task/$taskname",
              params: { taskname: "choose-correctly" },
            })
          }
        >
          Выбери правильное слово
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            navigate({
              to: "/task/$taskname",
              params: { taskname: "spell-out" },
            })
          }
        >
          Составь по буквам
        </Button>
      </Stack>
    </Box>
  );
};
