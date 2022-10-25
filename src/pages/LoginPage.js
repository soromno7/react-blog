import { Link } from "react-router-dom";
import { Form } from "../components/Form";

function LoginPage() {
    return (
        <div>
            <Form isRegisterPage={false} />
            <span>Haven't been registered yet? </span>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default LoginPage;