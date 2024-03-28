import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url("./public/background.jpg")`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          maxHeight="470px"
          width="600px"
          gap="15px"
          alignItems="center"
          justifyContent="center"
          border="1px solid rgba(43, 43, 43, 0.568)"
          borderRadius="15px"
          bgcolor="rgba(255, 255, 255, 0.192)"
          sx={{ backdropFilter: "blur(10px)" }}
        >
          <Typography m="20px" fontSize="1.7rem" fontWeight="800">
            Добро пожаловать на SkySpeak, сдесь вы поднимите уровень своего
            английского на новый уровень абсолютно бесплатно. Учись, играй,
            развивайся.
          </Typography>
          <Stack m="10px" flexDirection="row" gap="10px">
            <Button
              color="success"
              variant="contained"
              onClick={() => navigate({ to: "/login" })}
            >
              Войти
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={() => navigate({ to: "/registration" })}
            >
              Зарегистрироватся
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
