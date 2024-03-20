import { Box, Grid, TextField } from "@mui/material";
import { EMAIL_REGEX } from "~/libs/constans/regex";
import { FormInputPassword } from "~/libs/ui-kit/FormInputPassword";
import { LoadingButton } from "@mui/lab";
import { SubmitHandler, useForm } from "react-hook-form";
import { supabase } from "~/libs/core/supabaseClient";

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  // const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
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
