import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import '../Styles/Signup.scss'




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
        <section classname = "section-container">
            <div>
            Sign Up
            </div>
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
                <div>
              
                {/* <Link to="/login">Log in</Link> */}
                {/* will readd this once we add the router cause right now itll just throw an error  */}
                </div>
                </Form>
            )}
            </Formik>
            <div>
            Already have an account? <Link to="/login">Log in</Link>
            </div>
        </section>
    );
}
export default SignUp;
