import { Link } from "react-router-dom";
import { Form } from "../components/Form";

function RegisterPage() {

        return (
            <div>
                <Form isRegisterPage={true} />
                <span>Already have an account? </span>
                <Link to="/login" >Login</Link>
            </div>
        )
}

export default RegisterPage;