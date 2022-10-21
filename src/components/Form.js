import "../styles/loginForm.scss";
import { useFormik } from 'formik';
import { loginSchema } from '../schemas/loginSchema';
import { useNavigate } from "react-router-dom";

export function Form({handleRegister}) {

  let navigate = useNavigate();
    const onSubmit = (values) => {
      handleRegister(values.email, values.password);
      handleReset();
      navigate("/");
    }

    const {handleChange, handleBlur, touched, values, handleSubmit, errors, handleReset} = useFormik({
        initialValues: {
          email: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: loginSchema,
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
          <button type="submit" disabled={errors.email || errors.password || errors.confirmPassword}>Submit</button>
        </form>
      );
}