import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../context/LoginProvider';
import { LOGIN } from '../graphql/queries/usersQueries';

type FormValues = {
  email: String;
  password: String;
};

function Login() {
  const navigator = useNavigate();
  const [err, setErr] = useState<String | null>(null);
  const { setUserLog } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [login, { loading }] = useLazyQuery(LOGIN, {
    onCompleted(data) {
      setUserLog(data.login);
      navigator('/userconnect');
    },
    onError(error) {
      setErr(error.message);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (response) => {
    await login({ variables: { ...response } });
  };
  if (loading) return <div>Chargement en cours</div>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">
          Mail
          <input
            id="email"
            {...register('email', {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <span>Le mail est required</span>
          )}
        </label>
        <label htmlFor="">
          Mot de passe
          <input
            type="password"
            id="password"
            {...register('password', {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <span>Le mot de passe est required</span>
          )}
        </label>
      </div>
      <h4> {err} </h4>
      <input type="submit" value="Connection" />
    </form>
  );
}

export default Login;
