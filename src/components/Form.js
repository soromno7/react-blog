import "../styles/loginForm.scss";
import { useFormik } from 'formik';
import { loginSchema, registerSchema } from '../schemas/login-register-schemas';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { app } from "../firebaseConfig";

export function Form({isRegisterPage}) {

    let navigate = useNavigate();

    const auth = getAuth(app);
            
    const dispatch = useDispatch();

    const addUser = (user, password) => {
      dispatch({type: 'ADD_USER', payload: {
        email: user.email,
        password: password,
        uid: user.uid,
        token: user.accessToken,
      }})
    }

    const handleRegister = (email, password) => {
      (isRegisterPage ? createUserWithEmailAndPassword(auth, email, password) : signInWithEmailAndPassword(auth, email, password))
        .then(({user}) => {
            addUser(user, password);
            navigate("/");
        })
        .catch(console.error)
    }

    const onSubmit = (values) => {
      console.log(values)
      handleRegister(values.email, values.password);
      handleReset();
    }

    const initialValues = isRegisterPage ?
    {
      email: '',
      password: '',
      confirmPassword: '',
    }
    :
    {
      email: '',
      password: ''
    }

    const validationSchema = isRegisterPage ? registerSchema : loginSchema;

    const {handleChange, handleBlur, touched, values, handleSubmit, errors, handleReset} = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={errors.email && touched.email? 'input-error' : ''}
          />
          {errors.email ? <span>{errors.email}</span> : ""}
          <label>Password</label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          {errors.password ? <span>{errors.password}</span> : ""}
          {isRegisterPage ?
          <>
            <label>Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword ? <span>{errors.confirmPassword}</span> : ""}
          </>
          :
            ""
          }
          <button type="submit">Submit</button>
        </form>
      );
}