import { useQuery } from '@apollo/client';
import { Navigate, Outlet } from 'react-router-dom';
import { CHECK_USER_CONNECT } from '../../graphql/queries/usersQueries';

function Auth() {
  const { data, loading } = useQuery(CHECK_USER_CONNECT);

  if (loading) return <div>Chargement en cours</div>;
  return data?.checkUser ? <Outlet /> : <Navigate to="/login" />;
}

export default Auth;
