import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://oviggccdwljaffiauhsn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92aWdnY2Nkd2xqYWZmaWF1aHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NjU1MTMsImV4cCI6MjAyNjA0MTUxM30.DsV6ElM4OgrQwKwV3r0rJFSbchNx-pnBWug4MLnYIkw",
);

export const AdminDashboard = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <Box>
      <Stack>
        <Box>
          {countries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </Box>
        <Typography>Admin</Typography>
        <Button onClick={() => navigate({ to: "/" })}>Back</Button>
      </Stack>
    </Box>
  );
};
