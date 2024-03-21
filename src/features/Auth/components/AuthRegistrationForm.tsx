import { Box, Grid, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputPassword } from "~/libs/ui-kit";
import { EMAIL_REGEX } from "~/libs/constans";
import { LoadingButton } from "@mui/lab";
import { supabaseClient } from "~/libs/core";

export interface IRegistrationForm {
  userName: string;
  email: string;
  password: string;
}

export const AuthRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>();
  // const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    await supabaseClient.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: "user",
        data: { userName: data.userName },
      },
    });
  };

  return (
    <Box
      margin="100px auto"
      width="300px"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item xs={12} width="100%">
          <TextField
            {...register("email", { required: true, pattern: EMAIL_REGEX })}
            error={!!errors.email}
            helperText={!!errors.email && "email"}
            size="small"
            autoComplete="email"
            label={"email"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <TextField
            {...register("userName", { required: true })}
            error={!!errors.userName}
            helperText={!!errors.userName && "name"}
            size="small"
            label={"name"}
            autoComplete="fullName"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <FormInputPassword
            id="password"
            error={errors.password && "password"}
            label={"password"}
            inputProps={register("password", {
              required: true,
            })}
          />
        </Grid>
        <Grid item xs={12} width="100%">
          <LoadingButton
            type="submit"
            variant="contained"
            sx={{ mt: 3 }}
            fullWidth
          >
            {"signUp"}
          </LoadingButton>
        </Grid>
      </Grid>
    </Box>
  );
};
