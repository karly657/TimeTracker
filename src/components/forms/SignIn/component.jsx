import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Formik, Form } from 'formik';
import { signInSchema } from '@/schemas'
import { CALENDAR_PAGE, SIGN_UP_PAGE } from '@/constants'
import Fieldset from '@/components/shared/Fieldset'

const SignInForm = ({uid, authError, signIn, history}) => {
  if (uid) return <Redirect to={CALENDAR_PAGE} />

  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        onSubmit={values => {
          signIn(values);
          if (Boolean(authError)) history.push(CALENDAR_PAGE);
        }}
      >
        {() => (
          <Form className="col-md-8">
            <h3 className="mb-4">Sign In</h3>

            <Fieldset
              name="email"
              label="Email"
            />

            <Fieldset
              name="password"
              label="Password"
              type="password"
            />

            <button type="submit" className="btn btn-primary">Sign In</button>
            <div className="mt-2">{authError || null}</div>
            <div className="mt-2">Not registered? <Link to={SIGN_UP_PAGE}>Sign Up</Link></div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignInForm;