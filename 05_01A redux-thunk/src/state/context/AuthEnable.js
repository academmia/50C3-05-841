import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "./auth-context";

export const AuthEnable = ({children}) => {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {
                auth.token ? 
                children :
                undefined
            }
        </>
    )
}

export const AuthDisable = ({children}) => {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {
                auth.token ? 
                undefined :
                children
            }
        </>
    )
}

export const AuthRoute = ({ path, component }) => {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {
                auth.token ? 
                <Route path={path} component={component} /> :
                <Redirect to={`/login/${path.substring(1)}`} /> 
            }
        </>
    )
}

export default AuthEnable;
