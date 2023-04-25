import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { MutationAddUserArgs } from "../generated/graphql";
import { ADD_USER } from "../graphql/mutations/usersMutations";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import imgLogin from "../../src/assets/imgLogin.png";

interface FormValues extends MutationAddUserArgs {}
// type FormValues = {
//   firstname: string;
//   lastname: string;
//   email: String;
//   password: String;
// };

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone is required"),
  birthdate: yup.string().required("Birthdate is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

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
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <h3>Créer un compte</h3>
        <br className="line" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="gap-5 mt-4 d-flex justify-content-center">
            <label htmlFor="">
              Nom
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="Doe"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="lastname"
                {...register(
                  "user.lastname"
                  // {
                  //   required: true,
                  //   minLength: 3,
                  //   maxLength: 30,
                  // }
                )}
                // error={!!errors.user?.lastname}
                // helperText={errors.user?.lastname?.message}
              />
              <p>{!!errors.user?.lastname}</p>
              <p>{errors.user?.lastname?.message}</p>
              {/* {errors.user?.lastname &&
                errors.user?.lastname.type === "required" && (
                  <span>Le nom est required</span>
                )} */}
            </label>
            <label htmlFor="">
              Prenom
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="John"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
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
          </div>

          <div
            style={{ gap: "3.8rem" }}
            className="mt-4 d-flex justify-content-center align-items-center">
            <label htmlFor="">
              Date de Naissance
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="20/10/2000"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="birthdate"
                {...register("user.birthdate", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              {errors.user?.lastname &&
                errors.user?.lastname.type === "required" && (
                  <span>Le date de naissance est required</span>
                )}
            </label>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label className="custom-control-label">Homme</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label className="custom-control-label">Femme</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                name="customRadioInline1"
                className="custom-control-input"
              />
              <label className="custom-control-label">Autre</label>
            </div>
          </div>

          <div className="gap-5 mt-4 d-flex justify-content-center">
            <label htmlFor="">
              Téléphone
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="0623456712"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="lastname"
                {...register("user.lastname", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              {errors.user?.lastname &&
                errors.user?.lastname.type === "required" && (
                  <span>Le numéro de téléphone est required</span>
                )}
            </label>
            <label htmlFor="">
              Mot de passe
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="***********"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type="password"
                id="password"
                {...register("user.password", {
                  required: true,
                })}
              />
              {errors.user?.firstname &&
                errors.user?.firstname.type === "required" && (
                  <span>Le mot de passe est required</span>
                )}
            </label>
          </div>
          <div className="gap-5 mt-4 d-flex justify-content-center">
            <label htmlFor="">
              Email
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="0623456712"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="email"
                {...register("user.email", {
                  pattern: /[A-Za-z]{3}/,
                  required: true,
                })}
              />
              {errors.user?.lastname &&
                errors.user?.lastname.type === "required" && (
                  <span>L'email est required</span>
                )}
            </label>
            <label htmlFor="">
              Confiramtion de Mot de passe
              <input
                style={{ width: "20rem" }}
                className="form-control"
                placeholder="***********"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="firstname"
                {...register("user.firstname", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              {errors.user?.firstname &&
                errors.user?.firstname.type === "required" && (
                  <span>La confirmation du mot de passe est required</span>
                )}
            </label>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button className="btn btn-primary">Inscription</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
