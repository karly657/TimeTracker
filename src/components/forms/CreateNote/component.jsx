import React from 'react'
import { Formik, Form } from 'formik';
import { createNoteSchema } from '@/schemas'
import { CALENDAR_PAGE } from '@/constants'
import Fieldset from '@/components/shared/Fieldset'

const CreateNoteForm = ({createNote, history, authError}) => {
  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={createNoteSchema}
        onSubmit={values => {
          createNote(values);
          history.push(CALENDAR_PAGE);
        }}
      >
        {() => (
          <Form className="col-md-8">
            <h3 className="mb-4">Create note</h3>

            <Fieldset
              name="date"
              label="Date"
              placeholder="MM.DD.YYYY"
            />

            <Fieldset
              name="hours"
              label="Hours"
              placeholder="Number"
            />

            <button type="submit" className="btn btn-primary">Create</button>
            <div>{authError || null}</div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreateNoteForm;