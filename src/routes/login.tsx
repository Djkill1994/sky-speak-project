import { Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { AuthLoginForm } from "~/features/Auth/components";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("./public/background.jpg")`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        height: "100%",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AuthLoginForm />
    </Box>
  );
};

export const Route = createFileRoute("/login")({
  component: Login,
});
