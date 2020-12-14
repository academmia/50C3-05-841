import { useEffect, useState } from 'react';
import AuthContext from './auth-context';

console.log('Load from localStorage...');
const localAuth = JSON.parse( localStorage.getItem('auth') );

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(localAuth ? localAuth : {})

    useEffect(() => {
        console.log('Save to localStorage...');
        localStorage.setItem('auth', JSON.stringify(auth))
    }, [auth]); // save at every change

    return (
        <AuthContext.Provider value={ { auth, setAuth } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider