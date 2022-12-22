import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../context/LoginProvider';

function Auth() {
  const { user } = useLogin();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Auth;
