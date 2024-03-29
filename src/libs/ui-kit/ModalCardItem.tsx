import { useGetCardApi } from "~/features/Dashboard/api";
import { CardItem } from "./CardItem";
import { Box, CircularProgress, IconButton, Modal, Stack } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface IModalCardItemProps {
  onClose: () => void;
}

export const ModalCardItem = ({ onClose }: IModalCardItemProps) => {
  const { data, isFetching, refetch } = useGetCardApi();
  // let interval;
  // const autoRefresh = () => {
  //   interval = setInterval(refetch, 3000);
  // };
  //
  // console.log(interval);
  // const onCloseModal = ({ interval }) => {
  //   onClose();
  //   clearInterval(interval);
  // };
  return (
    <Modal open onClose={onClose} sx={{ display: "flex" }}>
      <Box m="auto">
        {isFetching ? (
          <CircularProgress />
        ) : (
          <Box display="grid">
            <Box gridArea="1/1/2/2">
              <Stack justifyContent="space-between" flexDirection="row">
                <IconButton onClick={() => refetch()}>
                  <KeyboardArrowLeft sx={{ height: "280px", width: "40px" }} />
                </IconButton>
                <IconButton onClick={() => refetch()}>
                  <KeyboardArrowRight sx={{ height: "280px", width: "40px" }} />
                </IconButton>
              </Stack>
            </Box>
            <Box gridArea="1/1/2/2">
              <CardItem
                en_word={data!.en_word}
                ru_word={data!.ru_word}
                imgSrc={data!.img}
              />
            </Box>
            {/*<Box*/}
            {/*  gridArea="1/1"*/}
            {/*  display="flex"*/}
            {/*  alignItems="center"*/}
            {/*  justifyContent="flex-end"*/}
            {/*  flexDirection="column"*/}
            {/*>*/}
            {/*  <IconButton onClick={() => refetch()}>*/}
            {/*    <PlayCircle />*/}
            {/*  </IconButton>*/}
            {/*</Box>*/}
          </Box>
        )}
      </Box>
    </Modal>
  );
};
