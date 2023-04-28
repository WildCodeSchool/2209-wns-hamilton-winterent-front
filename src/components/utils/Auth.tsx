import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../../context/LoginProvider';

function Auth() {
  const { userLog } = useLogin();
  return userLog ? <Outlet /> : <Navigate to="/login" />;
}

export default Auth;
