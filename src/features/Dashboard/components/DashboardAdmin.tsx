import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const DashboardAdmin = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack>
        <Typography>Admin</Typography>
        <Button onClick={() => navigate({ to: "/" })}>Back</Button>
      </Stack>
    </Box>
  );
};
