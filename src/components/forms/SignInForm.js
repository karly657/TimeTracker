import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const SignInForm = (props) => {
  if (props.auth.uid) return <Redirect to='/' />

  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SigninSchema}
        onSubmit={values => {
          props.signIn(values);
          if (Boolean(props.authError)) props.history.push('/');
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
            <div>{props.authError || null}</div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)