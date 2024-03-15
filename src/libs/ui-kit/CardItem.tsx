import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

export interface CardProps {
  text1: string;
  text2: string;
  imgSrc: string;
}

export const CardItem = ({ text1, text2, imgSrc }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardMedia component="img" height="150" image={imgSrc} alt="Image" />
      <CardContent>
        <Stack alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {text1}
          </Typography>
          <Typography display="flex" gap="4px">
            {text2}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
