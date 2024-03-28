import { Box } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Box height="100vh">
      <Outlet />
      <TanStackRouterDevtools />
    </Box>
  ),
});
