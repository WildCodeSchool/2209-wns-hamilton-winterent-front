import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginProvider";
import { QueryLoginArgs } from "../../generated/graphql";
import { LOGIN } from "../../graphql/queries/usersQueries";
import imgLogin from '../../assets/imgLogin.png';
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
    <div>

   
    <div >
      <img className="w-100" src={imgLogin} alt="" />
    </div>
    
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-column align-items-center text-center">
        <label className="d-flex flex-column" htmlFor="">
          Mail
          <input style={{ width: '30rem'}} className="form-control" placeholder="john@example.com" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
            id="email"
            {...register("user.email", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
          />
          {errors.user?.email && errors.user?.email.type === "required" && (
            <span className="alert alert-danger">Le mail est required</span>
          )}
        </label>
        <label className="mt-5" htmlFor="">
          Mot de passe
          <input style={{ width: '30rem'}} className="form-control" placeholder="***********" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
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
              <span className="alert alert-danger">Le mot de passe est required</span>
            )}
        </label>
      </div>
      <h4> {err} </h4>
      <div className="d-flex justify-content-center">
        <button className="btn btn-light btn-sm mt-4" type="submit" >Connexion</button>
      </div>
    </form>
    </div>
  );
}

export default Login;

