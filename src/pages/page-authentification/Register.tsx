import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../generated/graphql";
import { ADD_USER } from "../../graphql/mutations/usersMutations";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  passwordSchema,
  registerSchema,
} from "../../validations/userFormValidations";
import imgLogin from "../../../src/assets/imgLogin.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import useNotification from "../../notifications/useNotification";
import { useState } from "react";

interface FormValues extends CreateUser {
  email: string;
  phoneNumber: string | null;
  birthdate: string | null;
}

const schema = registerSchema.concat(passwordSchema);

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { phoneNumber: null },
    resolver: yupResolver(schema),
  });

  const { authentification } = useNotification();

  const navigate = useNavigate();
  const [addUser, { loading, error }] = useMutation(ADD_USER);
  const [waiting, setWaiting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await addUser({
      variables: { user: data },
      onCompleted(data) {
        toast(authentification.loginSuccess, {
          onClose(props) {
            navigate("/login");
          },
          onOpen() {
            setWaiting(true);
          },

          type: "success",
        });
      },
    });
  };

  // if (loading) return <div>Chargement en cours</div>;
  // if (error) return <div>Une erreur s'est produite</div>;

  return (
    <div>
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>

      <div className="mt-3 d-flex justify-content-center">
        <h3>Créer un compte</h3>
        <br className="line" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="gap-5 mt-4 d-flex justify-content-center">
          <label htmlFor="">
            Nom <em className="text-danger">*</em>
            <input
              style={{ width: "20rem" }}
              className="form-control"
              placeholder="Doe"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="lastname"
              {...register("lastname")}
            />
            <div className="text-danger">{errors.lastname?.message}</div>
          </label>

          <label htmlFor="">
            Prenom <em className="text-danger">*</em>
            <input
              style={{ width: "20rem" }}
              className="form-control"
              placeholder="John"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="firstname"
              {...register("firstname")}
            />
            <div className="text-danger">{errors.firstname?.message}</div>
          </label>
        </div>

        <div
          style={{ gap: "3.8rem" }}
          className="mt-4 d-flex justify-content-center align-items-center"
        >
          <label htmlFor="">
            Date de Naissance
            <input
              style={{ width: "20rem" }}
              className="form-control"
              type="date"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="birthdate"
              {...(register("birthdate"), { required: false })}
            />
            <div className="text-danger">{errors.birthdate?.message}</div>
          </label>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="form-check-input"
              {...register("gender")}
              value="MAN"
            />
            <label className="custom-control-label">Homme</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="form-check-input"
              {...register("gender")}
              value="WOMAN"
            />
            <label className="custom-control-label">Femme</label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="form-check-input"
              {...register("gender")}
              value="OTHER"
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
              id="phoneNumber"
              {...register("phoneNumber")}
            />
            <div className="text-danger">{errors.phoneNumber?.message}</div>
          </label>
          <label htmlFor="">
            Mot de passe <em className="text-danger">*</em>
            <input
              style={{ width: "20rem" }}
              className="form-control"
              placeholder="***********"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="password"
              id="password"
              {...register("password")}
            />
            <div className="text-danger">{errors.password?.message}</div>
          </label>
        </div>
        <div className="gap-5 mt-4 d-flex justify-content-center">
          <label htmlFor="">
            Email <em className="text-danger">*</em>
            <input
              style={{ width: "20rem" }}
              className="form-control"
              placeholder="doe@gmail.com"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="email"
              {...register("email")}
            />
            <div className="text-danger">{errors.email?.message}</div>
          </label>
          <label htmlFor="">
            Confirmation de Mot de passe <em className="text-danger">*</em>
            <input
              style={{ width: "20rem" }}
              className="form-control"
              placeholder="***********"
              type="password"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <div className="text-danger">{errors.confirmPassword?.message}</div>
          </label>
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <button className="btn btn-primary" disabled={waiting || loading}>
            {loading
              ? "Chargement en cours"
              : waiting
              ? "Veuillez patienter..."
              : "Inscription"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
function onCompleted(data: FormValues) {
  throw new Error("Function not implemented.");
}
