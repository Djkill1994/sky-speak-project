import { Box, Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Box>
      LOGIN
      <Button onClick={() => navigate({ to: "/" })}>Back</Button>
      <Button onClick={() => navigate({ to: "/user" })}>User</Button>
    </Box>
  );
};
