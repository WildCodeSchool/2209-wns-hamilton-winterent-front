import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Auth from './components/Auth';
import Login from './components/Login';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import UserConnect from './components/UserConnect';
import LoginProvider from './context/LoginProvider';
import Header from './components/header/Header';
import Home from './components/Home';
import Category from './components/category/Category';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include',
  cache: new InMemoryCache({
    addTypename: false, //permet d'éviter d'avoir __typename dans nos retours
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoginProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Auth />}>
              <Route path="/userconnect" element={<UserConnect />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
