import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikWrap, FormWrap, ButForm } from './Form.styles';

import * as Yup from 'yup';
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must not contain characters'
    )
    .required(''),
  number: Yup.string()
    .min(5, 'Too short  number')
    .max(10, 'Too long number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Must have only numbers'
    )
    .required(''),
  contacts: Yup.array(),
});

export const Forms = ({ submitForm, initialValues }) => {
  return (
    <FormikWrap>
      <Formik
        validationSchema={validationSchema}
        onSubmit={submitForm}
        initialValues={initialValues}
      >
        <Form>
          <FormWrap>
            <h2>Name</h2>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="p" />
            <h2>Number</h2>
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="p" />
            <ButForm type="submit">Add contact</ButForm>
          </FormWrap>
        </Form>
      </Formik>
    </FormikWrap>
  );
};
