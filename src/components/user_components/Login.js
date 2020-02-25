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
            onSubmit={async (values, { setStatus }) => {
                try {
                //needs the axios call once we make the BE end points
                } catch (error) {
                console.log(error);
                setStatus({ msg: error });
                }
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
            Need an account? 
            {/* <Link to="/login">Log in</Link> */}
            {/* will readd this once we add the router cause right now itll just throw an error  */}
            </div>
        </>
    );
}
export default Login;
