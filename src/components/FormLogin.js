import React from 'react';
import { useFormik } from 'formik';

export const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  // console.log('Form Values', formik.values);

  return (
    <div className='login'>
      <form onSubmit={formik.handleSubmit}>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          id='channel'
          name='channel'
          type='text'
          placeholder='Channel'
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
};
