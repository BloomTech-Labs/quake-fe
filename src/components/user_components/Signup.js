import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import "../Styles/Signup.scss"

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  email: Yup.string().email('email is not valid').required('Please enter your email address'),
  password: Yup.string().required('Please enter a password'),
  phone: Yup.string().required('Please enter a phone number'),
  username: Yup.string().required('Please enter a username')
});
function SignUp(props) {
  return (
        <div className = "signup-container">
            <h3 className = "quake-head">Quake Live</h3>
            <h2 className = "signup">Sign Up</h2>
            <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '', phone: '', username: '' }}
            validationSchema={SignUpSchema}
            onSubmit={async (values, { setStatus }) => {
                try {
                    await axios.post('https://quakelabs-be-staging.herokuapp.com/api/auth/register', values);
                    const { password, username } = values;
                    const response = await axios.post('https://quakelabs-be-staging.herokuapp.com/api/auth/login', { username, password});
                    localStorage.setItem('token', response.data.token);
                    props.setUser(response.data.user);
                    props.history.push('/map');
                } catch (error) {
                console.log(error);
                setStatus({ msg: error });
                }
            }}
            >
            {({ isSubmitting, errors, touched }) => (
                <Form className="form">
                <div className = "form-div">
                    <Field
                    className="field"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    />
                    {touched.firstName && errors.firstName && (
                    <p className="form__error">{errors.firstName}</p>
                    )}
                    <Field
                    className="field"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    />
                    {touched.lastName && errors.lastName && (
                    <p className="form__error">{errors.lastName}</p>
                    )}
                    <Field
                    className="field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    />
                    {touched.email && errors.email && (
                    <p className="form__error">{errors.email}</p>
                    )}
                    <Field
                    className="field"
                    type="text"
                    name="username"
                    placeholder="Username"
                    />
                    {touched.username && errors.username && (
                    <p className="form__error">{errors.username}</p>
                    )}
                    <Field
                    className="field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    />
                    {touched.password && errors.password && (
                    <p className="form__error">{errors.password}</p>
                    )}
                    <Field
                    className="field"
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    />
                    {touched.phone && errors.phone && (
                    <p className="form__error">{errors.phone}</p>
                    )}
                    <button className = "signup-button">
                        Sign Up
                    </button>
                </div>
                </Form>
            )}
            </Formik>
            <div className = "login-link">
            Already have an account? <Link to="/login">Log in</Link>
            </div>
        </div>
    );
}
export default SignUp;
