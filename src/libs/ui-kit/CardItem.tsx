import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export interface CardProps {
  en_word: string | null;
  ru_word: string | null;
  imgSrc: string;
}

export const CardItem = ({ en_word, ru_word, imgSrc }: CardProps) => {
  return (
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
  );
};
