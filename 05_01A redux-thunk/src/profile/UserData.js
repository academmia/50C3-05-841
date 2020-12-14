import { useState } from "react";
import { saveUserData } from "../state/store/actions/userDataActions";

const { connect } = require("react-redux")

const UserData = props => {

    const [fullName, setFullName] = useState(props.fullName);
    const [email, setEmail] = useState(props.email);

    return (
        <div>
            <article className="card">
                <header>
                    <h3>Book One</h3>
                </header>

                <main>

                    <div className="flex three center">
                        <fieldset>
                            <label><input value={ fullName } onChange={ (ev) => setFullName(ev.target.value)}
                                type="text" placeholder="Full name" /></label>
                            <label><input value={ email } onChange={ (ev) => setEmail(ev.target.value)}
                                type="email" placeholder="Email" /></label>
                        </fieldset>
                    </div>
                    <hr />
                    <div className="flex three center">
                        {
                            props.borrowedBooks.map( book => ( <p key={book.id}> { book.name } </p> ) )
                        }
                    </div>
                    
                </main>    


                <footer>
                    <button onClick={ () => props.dispatch( saveUserData({ fullName, email }) ) }>
                        Save</button>
                </footer>
            </article>
        </div>
    )
} 

const mapStateToProps = (state, ownProps) => {
    return {
        fullName: state.userData.fullName,
        email: state.userData.email,
        borrowedBooks: state.userData.borrowedBooks
    }
}

// export default UserData;
export default connect(mapStateToProps)(UserData)