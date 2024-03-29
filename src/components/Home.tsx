import { useQuery } from '@apollo/client';
import { LIST_USERS } from '../graphql/queries/usersQueries';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

function Home() {
  const { loading, error, data } = useQuery(LIST_USERS);

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;
  return (
    <div>
      commenter map
      <ul>
        {data.users.map((users: User) => (
          <li key={users.id}>
            {users.firstname} | {users.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
