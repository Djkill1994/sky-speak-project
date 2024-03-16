import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

// const supabase = createClient(
//   import.meta.env.VITE_BACKEND_URL,
//   import.meta.env.VITE_BACKEND_URL,
// );

export const AdminDashboard = () => {
  // const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  //
  // useEffect(() => {
  //   getCountries();
  // }, []);
  //
  // async function getCountries() {
  //   const { data } = await supabase.from("countries").select();
  //   setCountries(data);
  // }

  return (
    <Box>
      <Stack>
        {/*<Box>*/}
        {/*  {countries.map((country) => (*/}
        {/*    <li key={country.name}>{country.name}</li>*/}
        {/*  ))}*/}
        {/*</Box>*/}
        <Typography>Admin</Typography>
        <Button onClick={() => navigate({ to: "/" })}>Back</Button>
      </Stack>
    </Box>
  );
};
