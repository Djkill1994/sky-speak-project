import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface ITaskContentContainerProps {
  onClick?: () => void;
  children?: ReactNode | string;
  bgColor?: string;
}

export const TaskContentContainer = ({
  onClick,
  children,
  bgColor,
}: ITaskContentContainerProps) => {
  return (
    <Stack
      width="35px"
      height="35px"
      alignItems="center"
      justifyContent="center"
      border="1px solid black"
      borderRadius="4px"
      onClick={onClick}
      bgcolor={bgColor}
      sx={{ cursor: "pointer" }}
    >
      {children}
    </Stack>
  );
};
