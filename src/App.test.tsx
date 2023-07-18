import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Category from './pages/page-category/Category';
import { LIST_CATEGORY } from './graphql/queries/categoryQuery';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
  cache: new InMemoryCache({
    addTypename: false, //permet d'éviter d'avoir __typename dans nos retours
  }),
});

describe('renders category', () => {
  it('verifie img', async () => {

    render(
      <ApolloProvider client={client}>
        <MemoryRouter initialEntries={["/"]}>
          <Category />
        </MemoryRouter>
      </ApolloProvider>
    );

    expect(screen.getByText('Chargement en cours')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Chargement en cours')).toBeNull();
    });

    expect(screen.getByText('CATEGORIES')).toBeInTheDocument();

  });
});
