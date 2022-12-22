import { createContext, useContext, useEffect, useState } from 'react';

interface UserContextInterface {
  user: Object | null;
  setUser: React.Dispatch<React.SetStateAction<String | null>>;
}
const LoginContext = createContext<UserContextInterface>({
  user: {},
  setUser: () => {},
});

const LoginProvider = ({ children }: any) => {
  const [user, setUser] = useState<String | null>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') || '')
      : null
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
