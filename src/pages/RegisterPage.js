import { Link } from "react-router-dom";
import { Form } from "../components/Form";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebaseConfig";
import { useDispatch } from "react-redux";

function RegisterPage() {
        
    const dispatch = useDispatch();

    const addUser = (user, password) => {
      dispatch({type: 'ADD_USER', payload: {
        email: user.email,
        password: password,
        uid: user.uid,
        token: user.accessToken,
      }})
    }

    const auth = getAuth(app);

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            addUser(user, password);

        })
        .catch(console.error)
    }

        return (
            <div>
                <Form handleRegister={handleRegister}/>
                <span>Already have an account? </span>
                <Link to="/login" >Login</Link>
            </div>
        )
}

export default RegisterPage;