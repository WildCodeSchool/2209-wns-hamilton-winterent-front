import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MutationAddUserArgs } from "../../generated/graphql";
import { ADD_USER } from "../../graphql/mutations/usersMutations";

interface FormValues extends MutationAddUserArgs {}
// type FormValues = {
//   firstname: string;
//   lastname: string;
//   email: String;
//   password: String;
// };

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await addUser({ variables: data });
    navigate("/login");
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
              {...register("user.lastname", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.lastname &&
              errors.user?.lastname.type === "required" && (
                <span>Le nom est required</span>
              )}
          </label>
          <label htmlFor="">
            Prenom
            <input
              id="firstname"
              {...register("user.firstname", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
            />
            {errors.user?.firstname &&
              errors.user?.firstname.type === "required" && (
                <span>Le prénom est required</span>
              )}
          </label>
          <label htmlFor="">
            email
            <input
              id="email"
              {...register("user.email", {
                pattern: /[A-Za-z]{3}/,
                required: true,
              })}
            />
            {errors.user?.email && errors.user?.email.type === "required" && (
              <span>l'email est required</span>
            )}
          </label>
          <label htmlFor="">
            Mot de passe
            <input
              type="password"
              id="password"
              {...register("user.password", {
                required: true,
              })}
            />
            {errors.user?.password &&
              errors.user?.password.type === "required" && (
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
