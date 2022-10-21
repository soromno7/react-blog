import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div>
            <span>Haven't been registered yet? </span>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default LoginPage;