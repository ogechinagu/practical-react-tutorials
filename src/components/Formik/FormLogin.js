import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './style.css';
import { TextError } from './TextError';

export const FormLogin = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: '',
    },
    phoneNumbers: ['', ''],
  };

  const onSubmit = (values) => {
    console.log('Form Data', values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name missing'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email required'),
    channel: Yup.string().required('Channel name required'),
    comments: Yup.string().required('Leave a comment'),
    address: Yup.string().required(`What's your address`),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className='login'>
        <Form>
          <div className='form-control'>
            <Field id='name' name='name' type='text' placeholder='Name' />
            <ErrorMessage name='name' component={TextError} />
            {/* first method to change the error message style */}
          </div>

          <div className='form-control'>
            <Field id='email' name='email' type='email' placeholder='Email' />
            <ErrorMessage name='email' component={TextError} />
          </div>

          <div className='wrapper'>
            <div className='form-control'>
              <Field
                id='phoneNumbers'
                name='phoneNumbers[0]'
                type='text'
                placeholder='Primary Phone Number'
              />
              <ErrorMessage name='phoneNumbers[0]' component={TextError} />
            </div>
            <div className='form-control float-right'>
              <Field
                id='phoneNumbers'
                name='phoneNumbers[1]'
                type='text'
                placeholder='Alternative Phone Number'
              />
              <ErrorMessage name='phoneNumbers[1]' component={TextError} />
            </div>
          </div>

          <div className='form-control'>
            <Field
              id='channel'
              name='channel'
              type='text'
              placeholder='Channel'
            />
            <ErrorMessage name='channel'>
              {(err) => <div className='error'>{err}</div>}
            </ErrorMessage>
            {/* second method to change the error message style */}
          </div>

          <div className='form-control'>
            <Field
              as='textarea'
              id='comments'
              name='comments'
              placeholder='Comments'
            />
            <ErrorMessage name='comments' component={TextError} />
          </div>

          <div className='form-control'>
            <Field name='address'>
              {(props) => {
                const { field, meta } = props;
                // console.log('Render Props', props);
                return (
                  <div>
                    <input
                      type='text'
                      id='address'
                      placeholder='Address'
                      {...field}
                    />
                    {meta.touched && meta.error ? (
                      <div className='error'>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          <div className='wrapper'>
            <div className='form-control'>
              <Field
                id='facebook'
                name='social.facebook'
                type='text'
                placeholder='Facebook URL'
              />
              <ErrorMessage name='social.facebook' component={TextError} />
            </div>
            <div className='form-control'>
              <Field
                id='twitter'
                name='social.twitter'
                type='text'
                placeholder='Twitter URL'
              />
              <ErrorMessage name='social.twitter' component={TextError} />
            </div>
          </div>

          <div>
            <button type='submit'>Log in</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
