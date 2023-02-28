import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginProvider";
import { QueryLoginArgs } from "../generated/graphql";
import { LOGIN } from "../graphql/queries/usersQueries";

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
      console.log(data.login);
      setUserLog(data.login);
      navigator("/userconnect");
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
            {...register("user.email", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.user?.email && errors.user?.email.type === "required" && (
            <span>Le mail est required</span>
          )}
        </label>
        <label htmlFor="">
          Mot de passe
          <input
            type="password"
            id="password"
            {...register("user.password", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.user?.password &&
            errors.user?.password.type === "required" && (
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
