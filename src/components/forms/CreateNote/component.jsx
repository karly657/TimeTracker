import React from 'react'
import { createNote } from '../../../actions/noteActions'
import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import { createNoteSchema } from '../../schemas'
import { CALENDAR_PAGE } from '../../../constants'

const CreateNoteForm = (props) => {
  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={createNoteSchema}
        onSubmit={values => {
          props.createNote(values)
            .then(props.history.push(CALENDAR_PAGE));
        }}
      >
        {({ errors, touched }) => (
          <Form className="col-md-8">
            <h3 className="mb-4">Create note</h3>

            <div className="form-group">
              <label htmlFor="Date">Date</label>
              <Field name="date" className="form-control" placeholder="MM.DD.YYYY"/>
              {errors.date && touched.date && <div>{errors.date}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="hours">Hours</label>
              <Field name="hours" className="form-control" type="hours" placeholder="number"/>
              {errors.hours && touched.hours && <div>{errors.hours}</div>}
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
            <div>{props.authError || null}</div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => {
  return {
    createNote: (note) => dispatch(createNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteForm)