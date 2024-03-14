import {Box, Button} from "@mui/material"
import {useNavigate} from "@tanstack/react-router";


export const RegistrationForm = () => {
    const navigate = useNavigate()
    return (
        <Box>
            REGISTRATION
            <Button onClick={() => navigate({to: "/"})}>Back</Button>
        </Box>
    )
}