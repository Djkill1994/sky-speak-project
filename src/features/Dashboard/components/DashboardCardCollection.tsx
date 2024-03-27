import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { useNavigate, useParams } from "@tanstack/react-router";
import { useGetCardCollectionApi } from "~/features/Dashboard/api";
import { CardItem } from "~/libs/ui-kit";
import { useModal } from "~/libs/utils";

export const DashboardCardCollection = () => {
  const navigate = useNavigate();
  const { isOpened, open, close } = useModal();
  const { collectionId } = useParams({ from: "/collection/$collectionId" });
  const { data, isLoading } = useGetCardCollectionApi(Number(collectionId));

  return (
    <Box margin="8px">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Stack flexDirection="row" gap="8px">
          {data?.map(
            ({ card }) =>
              isOpened && (
                <CardItem
                  onClose={open}
                  key={card!.id}
                  imgSrc={card!.img}
                  ru_word={card!.ru_word}
                  en_word={card!.en_word}
                />
              ),
          )}
        </Stack>
      )}
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
    </Box>
  );
};
