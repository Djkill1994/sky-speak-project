import { Box, Button, Stack } from "@mui/material";
import { CardItem } from "../../../libs/ui-kit/CardItem.tsx";
import { useNavigate } from "@tanstack/react-router";

const cardArray = [
  {
    text1: "Hello",
    text2: "Привет",
    imgSrc:
      "https://png.pngtree.com/background/20230605/original/pngtree-twitter-twitter-bird-sunglasses-picture-image_2875446.jpg",
  },
  {
    text1: "Milk",
    text2: "Молоко",
    imgSrc:
      "https://rosa-pharm.com/wp-content/uploads/2018/02/korove-moloko_1_mini.jpg",
  },
  {
    text1: "Bread",
    text2: "Хлеб",
    imgSrc:
      "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg",
  },
];

export const UserDashboard = () => {
  const navigate = useNavigate();
  return (
    <Box margin="8px">
      <Stack flexDirection="row" gap="8px">
        {cardArray?.map(({ text1, text2, imgSrc }) => (
          <CardItem imgSrc={imgSrc} text1={text1} text2={text2} />
        ))}
      </Stack>
      <Button onClick={() => navigate({ to: "/" })}>Home</Button>
    </Box>
  );
};
