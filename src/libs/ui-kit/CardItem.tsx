import {
  Card,
  CardContent,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

export interface CardProps {
  en_word: string | null;
  ru_word: string | null;
  imgSrc: string;
  onClose: () => void;
}

export const CardItem = ({ en_word, ru_word, imgSrc, onClose }: CardProps) => {
  return (
    <Modal open onClose={onClose} sx={{ display: "flex" }}>
      <Card sx={{ width: 200 }}>
        <CardMedia component="img" height="150" image={imgSrc} alt="Image" />
        <CardContent>
          <Stack alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {en_word}
            </Typography>
            <Typography display="flex" gap="4px">
              {ru_word}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Modal>
  );
};
