import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginProvider";
import { QueryLoginArgs } from "../../generated/graphql";
import { LOGIN } from "../../graphql/queries/usersQueries";
import imgLogin from "../../assets/imgLogin.png";

interface FormValues extends QueryLoginArgs {}

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
      navigator("/");
    },
    onError(error) {
      setErr(error.message);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (response) => {
    var result = await login({ variables: { ...response } });
    console.log(result);
  };
  if (loading) return <div>Chargement en cours</div>;

  return (
    <div>
      <div>
        <img className="w-100" src={imgLogin} alt="" />
      </div>

      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column align-items-center text-center">
          <label className="d-flex flex-column" htmlFor="">
            Mail
            <input
              style={{ width: "30rem" }}
              className="form-control"
              placeholder="john@example.com"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="email"
              {...register("user.email")}
            />
          </label>
          <label className="mt-5" htmlFor="">
            Mot de passe
            <input
              style={{ width: "30rem" }}
              className="form-control"
              placeholder="***********"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="password"
              id="password"
              {...register("user.password")}
            />
          </label>
        </div>
        <p className="text-danger d-flex justify-content-center">
          {" "}
          {err ? "Les informations fournies ne sont pas correctes" : ""}{" "}
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-sm mt-4" type="submit">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
