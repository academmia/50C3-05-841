import { createContext } from 'react';

const AuthContext = createContext({
    auth: {},
    setAuth: () => {}
});

export default AuthContext;
