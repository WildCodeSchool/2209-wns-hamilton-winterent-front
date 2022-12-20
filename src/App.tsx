import React from 'react';
import { gql, useQuery } from "@apollo/client";
import './App.css';

interface  User {
  id: number;
  firstname:  string;
  lastname:  string;
  email:  string;
}

const GET_USERS = gql`
query ListUsers {
  users {
    id
    email
    firstname
    lastname
}
}
`
function App() {

  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data)

  if (loading) return <div>Chargement en cours</div>;
  if (error) return <div>Une erreur s'est produite</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bienvenue sur WinteRent
        </h1>
        <div>
          <ul>
            {data.users.map((users: User) => (
              <li key={users.id}>
                {users.firstname} | {users.lastname}
              </li>
            ))}
          </ul>
        </div>
        <form>
          <h4>Sign up</h4>
          <div>
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">S'inscrire</button>
        </form>
        <div>Log in</div>
      </header>
    </div>
  );
}

export default App;
