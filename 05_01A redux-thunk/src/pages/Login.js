import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AuthContext from "../state/context/auth-context";

const Login = props => {

    const history = useHistory();
    const { redirectTo } = useParams();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [err, setErr] = useState('');

    const { setAuth } = useContext(AuthContext);

    const loginHandler = ev => {
        console.log('Logging in...');
        setErr(''); // reset error messages
        fetch(`http://localhost:3344/login`, { 
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ email, password: pass })
         })
         .then ( result => result.json() )
         .then( data => {
             console.log('Server response: ', data); 
             if ( typeof data === 'string' ) { // eroare
                setErr(data);   // ramanem pe aceasi ruta
             } 
             else { // object - logged in     
                setAuth({ email, token: data.accessToken });
                const path = redirectTo ? `/${redirectTo}` : "/";
                console.log(path, redirectTo);
                history.push(path); 
             }
         })
         .catch( err => console.log(err) );

    } 

    return (
            <div className="login">
            
                <div className="flex three center">
                    <fieldset>
                        <code style={{ color: "red" }}><em> { err } </em></code>
                        <label><input value={ email } onChange={ ev => setEmail(ev.target.value) }
                            type="email" placeholder="Email" /></label>
                        <label><input value={ pass } onChange={ ev => setPass(ev.target.value) }
                            type="password" placeholder="Password" /></label>
                        <button onClick={ loginHandler }
                            style={{ width: "100%" }}> Login </button>
                    </fieldset>
                </div>

            </div>

    )
}

export default Login;
