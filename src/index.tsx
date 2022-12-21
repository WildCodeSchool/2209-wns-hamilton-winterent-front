import  React  from  "react";

import  ReactDOM  from  "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import  "./index.css";
import  App  from  "./App";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Register from "./components/Register"
import  reportWebVitals  from  "./reportWebVitals";
import {ApolloClient, InMemoryCache, ApolloProvider} from  "@apollo/client";

const  client  =  new  ApolloClient({
    uri: "http://localhost:8000/graphql",
    credentials: "include",
    cache:  new  InMemoryCache({
        addTypename:  false, //permet d'éviter d'avoir __typename dans nos retours
    }),
});

const  root  =  ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ApolloProvider  client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="accueil" element={<Home />} />
                        <Route path="auth" element={<Auth />}>
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals();
