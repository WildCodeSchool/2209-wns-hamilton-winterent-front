import { useMutation } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateUser } from "../../generated/graphql";
import { ADD_USER } from "../../graphql/mutations/usersMutations";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/userFormValidations";
import imgLogin from "../../../src/assets/imgLogin.png";
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import React from "react";

interface FormValues extends CreateUser {}

// interface Example extends React.Component {
//   createNotification = (type: any) => {
//     return () => {
//       switch (type) {
//         case 'success':
//           NotificationManager.success('Success message', 'Title here');
//           break;
//         case 'error':
//           NotificationManager.error('Error message', 'Click me!', 5000, () => {
//             alert('callback');
//           });
//           break;
//       }
//     };
//   };
// };

function Register(this: any) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { phoneNumber: null },
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();
  const [addUser, { loading, error }] = useMutation(ADD_USER);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    console.log("birthdate", data.birthdate);

    await addUser({ variables: { user: data } });

    navigate("/login");
  };

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  return (
    <div>
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>

      {/* Notification  */}
      <div>
        <button
          className="btn btn-success"
          onClick={this.createNotification("success")}>
          Success
        </button>
        <button
          className="btn btn-danger"
          onClick={this.createNotification("error")}>
          Error
        </button>
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
          className="mt-4 d-flex justify-content-center align-items-center">
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
            {/* <div className="text-danger">{errors.email?.message}</div> */}
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
          </label>
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <button className="btn btn-primary">Inscription</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
