import {Box, Button, Stack, Typography} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";

export const Home = () => {
    const navigate = useNavigate()

    return (
        <Box bgcolor="grey">
            <Stack>
                <Typography>Какойто текст</Typography>
                <Stack>
                    <Button onClick={() => navigate({to: "/login"})}>Войти</Button>
                    <Button onClick={() => navigate({to: "/registration"})}>Зарегистрироватся</Button>
                </Stack>
            </Stack>
        </Box>
    )
}