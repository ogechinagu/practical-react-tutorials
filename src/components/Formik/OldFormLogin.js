import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const OldFormLogin = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
  };

  const onSubmit = (values) => {
    console.log('Form Data', values);
  };

  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = 'Name is Required';
  //   }

  //   if (!values.email) {
  //     errors.email = 'Email is Required';
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = 'Invalid email format';
  //   }

  //   if (!values.channel) {
  //     errors.channel = 'Channel Name is Required';
  //   }
  //   return errors;
  // };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name missing'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email required'),
    channel: Yup.string().required('Channel name required'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate,
  });

  // console.log('Form Values', formik.values);
  // console.log('Form errors', formik.errors);
  console.log('Visited Fields', formik.touched);

  return (
    <div className='login'>
      <form onSubmit={formik.handleSubmit}>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red', fontSize: '12px' }}>
            {formik.errors.name}
          </div>
        ) : null}
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red', fontSize: '12px' }}>
            {formik.errors.email}
          </div>
        ) : null}
        <input
          id='channel'
          name='channel'
          type='text'
          placeholder='Channel'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div style={{ color: 'red', fontSize: '12px' }}>
            {formik.errors.channel}
          </div>
        ) : null}
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};
