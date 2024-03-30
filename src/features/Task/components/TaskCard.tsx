import { Card, CardContent, CardMedia } from "@mui/material";
import { ReactNode } from "react";

interface ITaskCardProps {
  imgSrc: string;
  children: ReactNode;
}

export const TaskCard = ({ imgSrc, children }: ITaskCardProps) => {
  return (
    <Card
      sx={{
        height: "500px",
        width: "550px",
      }}
    >
      <CardMedia component="img" height="300" image={imgSrc} alt="Image" />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
