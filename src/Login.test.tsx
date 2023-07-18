import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Category from './pages/page-category/Category';
import Login from './pages/page-authentification/Login';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
  cache: new InMemoryCache({
    addTypename: false, //permet d'éviter d'avoir __typename dans nos retours
  }),
});

describe('login user', () => {
  it('verify input email, password and button', async () => {
    render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </ApolloProvider>
    );

    expect(screen.getByLabelText('Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Mot de passe')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('insert value for email and password', async () => {
    render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Login />
          <Category/>
        </MemoryRouter>
      </ApolloProvider>
    );

    const email = screen.getByLabelText('Mail') as HTMLInputElement;
    const pass = screen.getByLabelText('Mot de passe') as HTMLInputElement;
    const submitButton = screen.getByRole('button', {
      name: 'Connexion',
    });

    await act(async () => {
      userEvent.type(email, 'davy@gmail.com');
      userEvent.type(pass, 'password');
      await waitFor(() => {
        expect(email.value).toBe('davy@gmail.com');
        expect(pass.value).toBe('password');
      });
    });

    await act(async () => {
      userEvent.click(submitButton);
    });
  });
});
