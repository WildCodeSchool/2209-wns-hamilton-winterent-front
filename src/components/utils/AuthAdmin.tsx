import { useQuery } from '@apollo/client';
import { Navigate, Outlet } from 'react-router-dom';
import { CHECK_USER_IS_ADMIN } from '../../graphql/queries/usersQueries';

function AuthAdmin() {
  const { data, loading } = useQuery(CHECK_USER_IS_ADMIN);

  if (loading) return <div>Chargement en cours</div>;
  return data?.checkUserIsAdmin ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthAdmin;
