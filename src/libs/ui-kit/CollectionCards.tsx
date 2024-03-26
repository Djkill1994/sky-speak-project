import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export interface CardProps {
  name: string | null;
  imgSrc: string;
  id: number;
}

export const CollectionCards = ({ name, imgSrc, id }: CardProps) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 240 }}>
      <CardActionArea
        onClick={() =>
          navigate({
            to: "/collection/$collectionId",
            params: { collectionId: id.toString() },
          })
        }
      >
        <CardMedia component="img" height="150" image={imgSrc} alt="Image" />
        <CardContent>
          <Stack alignItems="center">
            <Typography display="flex" gap="4px">
              {name}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
