import { useMutation } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ADD_USER } from '../graphql/users';

type FormValues = {
  firstname: string;
  lastname: string;
  email: String;
  password: String;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    addUser({ variables: data });
  };
console.log(error);

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">
            Nom
            <input
              id="lastname"
              {...register('lastname', {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.lastname && errors.lastname.type === 'required' && (
              <span>Le nom est required</span>
            )}
          </label>
          <label htmlFor="">
            Prenom
            <input
              id="firstname"
              {...register('firstname', {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.firstname && errors.firstname.type === 'required' && (
              <span>Le prénom est required</span>
            )}
          </label>
          <label htmlFor="">
            email
            <input
              id="email"
              {...register('email', {
                pattern: /[A-Za-z]{3}/,
                required: true,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span>l'email est required</span>
            )}
          </label>
          <label htmlFor="">
            Mot de passe
            <input
              id="password"
              {...register('password', {
                required: true,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <span>Le mot de passe est required</span>
            )}
          </label>
        </div>
        <input type="submit" value="inscription" />
      </form>
    </div>
  );
}

export default Register;
