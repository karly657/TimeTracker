import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../../actions/authActions'
import { Redirect, Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { signUpSchema } from '../../schemas'
import { CALENDAR_PAGE, SIGN_IN_PAGE } from '../../../constants'

const SignUpForm = (props) => {
  if (props.uid) return <Redirect to={CALENDAR_PAGE} />

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
          props.signUp(values);
          if (Boolean(props.authError)) props.history.push(CALENDAR_PAGE);
        }}
      >
        {({ errors, touched }) => (
          <Form className="col-md-8">
            <h3 className="mb-4">Sign Up</h3>

            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <Field name="firstName" className="form-control" />
              {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <Field name="lastName" className="form-control" />
              {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
            </div>

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

            <div className="form-group">
              <label htmlFor="passwordTwo">Repeat password</label>
              <Field name="passwordTwo" className="form-control" type="password" />
              {errors.passwordTwo && touched.passwordTwo && <div>{errors.passwordTwo}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
            <div className="mt-2">{props.authError || null}</div>
            <div className="mt-2">Already have an account? <Link to={SIGN_IN_PAGE}>Sign In</Link></div>
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
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)