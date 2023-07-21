import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../context/LoginProvider';
import { QueryLoginArgs } from '../../generated/graphql';
import { LOGIN } from '../../graphql/queries/usersQueries';
import imgLogin from '../../assets/imgLogin.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import useNotification from '../../notifications/useNotification';
interface FormValues extends QueryLoginArgs {}

function Login() {
  const navigator = useNavigate();
  const { authentification } = useNotification();
  const [err, setErr] = useState<String | null>(null);
  const { setUserLog } = useLogin();
  const [waiting, setWaiting] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
  } = useForm<FormValues>();

  const [login, { loading }] = useLazyQuery(LOGIN, {
    onCompleted(data) {
      toast(authentification.loginSuccess, {
        onClose() {
          setUserLog(data.login);
          navigator('/');
        },
        onOpen() {
          setWaiting(true);
        },
        type: 'success',
      });
    },
    onError(error) {
      setErr(error.message);
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (response) => {
    await login({ variables: { ...response } });
  };

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

      <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column align-items-center text-center">
          <label className="d-flex flex-column" htmlFor="email">
            Mail
            <input
              style={{ width: '30rem' }}
              className="form-control"
              placeholder="john@example.com"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              id="email"
              {...register('user.email')}
            />
          </label>
          <label className="mt-5" htmlFor="password">
            Mot de passe
            <input
              style={{ width: '30rem' }}
              className="form-control"
              placeholder="***********"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="password"
              id="password"
              {...register('user.password')}
            />
          </label>
        </div>
        <p className="text-danger d-flex justify-content-center">
          {' '}
          {err ? 'Les informations fournies ne sont pas correctes' : ''}{' '}
        </p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary btn-sm mt-4"
            type="submit"
            disabled={waiting || loading}
          >
            {loading
              ? 'Chargement en cours'
              : waiting
              ? 'Veuillez patienter...'
              : 'Connexion'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
