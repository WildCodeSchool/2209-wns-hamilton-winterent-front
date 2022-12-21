import { gql, useQuery } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ADD_USER, LOGIN } from '../graphql/users';

type FormValues = {
  email: String;
  password: String;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

   const { loading, error, data } = useQuery(LOGIN);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // addUser({ variables: data });
  };

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
      <input type="submit" value="Connection" />
    </form>

    
  );
}

export default Login;
