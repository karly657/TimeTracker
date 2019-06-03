import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../../actions/authActions'
import { Redirect, Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { signInSchema } from '../../schemas'
import { CALENDAR_PAGE, SIGN_UP_PAGE } from '../../../constants'

const SignInForm = (props) => {
  if (props.uid) return <Redirect to={CALENDAR_PAGE} />

  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        onSubmit={values => {
          props.signIn(values);
          if (Boolean(props.authError)) props.history.push(CALENDAR_PAGE);
        }}
      >
        {({ errors, touched }) => (
          <Form className="col-md-8">
            <h3 className="mb-4">Sign In</h3>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field name="email" className="form-control" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" className="form-control" type="password" />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Sign In</button>
            <div className="mt-2">{props.authError || null}</div>
            <div className="mt-2">Not registered? <Link to={SIGN_UP_PAGE}>Sign Up</Link></div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)