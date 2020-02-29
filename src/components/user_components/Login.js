import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Please enter your username'),
  password: Yup.string().required('Please enter a password'),
});
function Login(props) {
  return (
        <>
            <div>
            Login
            </div>
            <Formik
            initialValues={{ username: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
                axios.post('https://quakelabs-be-staging.herokuapp.com/api/auth/login', values)
                    .then(res => {
                        localStorage.setItem('token', res.data.token);
                        props.setUser(res.data.user);
                        props.history.push('/map');
                    })
                    .catch(err => {
                        console.log(err);
                        setStatus(err.rresponse.data.message);
                        setSubmitting(false);
                    });
            }}
            >
            {({ isSubmitting, errors, touched }) => (
                <Form className="form">
                <div>
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
                    <button>
                    Login
                    </button>
                </div>
                </Form>
            )}
            </Formik>
            <div>
            Need an account? <Link to="/signup">Sign up</Link>
            </div>
        </>
    );
}
export default Login;
