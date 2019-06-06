import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Formik, Form } from 'formik';
import { signUpSchema } from '@/schemas'
import { CALENDAR_PAGE, SIGN_IN_PAGE } from '@/constants'
import Fieldset from '@/components/shared/Fieldset'

const SignUpForm = ({uid, authError, signUp, history}) => {
  if (uid) return <Redirect to={CALENDAR_PAGE} />

  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordTwo: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={signUpSchema}
        onSubmit={values => {
          signUp(values);
          if (Boolean(authError)) history.push(CALENDAR_PAGE);
        }}
      >
        {() => (
          <Form className="col-md-8">
            <h3 className="mb-4">Sign Up</h3>

            <Fieldset
              name="firstName"
              label="First name"
            />

            <Fieldset
              name="lastName"
              label="Last name"
            />

            <Fieldset
              name="email"
              label="Email"
            />

            <Fieldset
              name="password"
              label="Password"
              type="password"
            />

            <Fieldset
              name="passwordTwo"
              label="Repeat password"
              type="password"
            />

            <button type="submit" className="btn btn-primary">Sign Up</button>
            <div className="mt-2">{authError || null}</div>
            <div className="mt-2">Already have an account? <Link to={SIGN_IN_PAGE}>Sign In</Link></div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
  
export default SignUpForm;
