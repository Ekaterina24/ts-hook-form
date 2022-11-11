import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form';
import './auth-form.css';
import {loginValidation, passwordValidation} from './validation'

interface ISingInForm {
  login: string;
  password: string;
}

export const AuthForm = () => {
  const { handleSubmit, control } = useForm<ISingInForm>();
  const { errors } = useFormState({ control });
  const onSubmit: SubmitHandler<ISingInForm> = (data) => console.log(data);

  return (
    <div className="auth-form">
      <Typography variant="h4">Войдите</Typography>
      <Typography
        variant="subtitle1"
        gutterBottom={true}
        className="auth-form__subtitle"
      >
        Чтобы получить доступ
      </Typography>
      <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          rules={loginValidation}
          name="login"
          render={({ field }) => (
            <TextField
              label="Логин"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              helperText={errors.login?.message}
              error={!!errors.login?.message}
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Controller
          control={control}
          rules={passwordValidation}
          name="password"
          render={({ field }) => (
            <TextField
              label="Пароль"
              type="password"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
