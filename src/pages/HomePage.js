import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {  
    
    const auth = getAuth();
    const dispatch = useDispatch();
    const email = useSelector((store) => store.email)

    const signOutFunc = () => {
        signOut(auth)
        .then(() => {
            dispatch({type: "REMOVE_USER"})
        })
    }

    return (
        <div>
            Test me
            <button onClick={signOutFunc}>Sign out from {email}</button>
        </div>
    );
}

export default HomePage;