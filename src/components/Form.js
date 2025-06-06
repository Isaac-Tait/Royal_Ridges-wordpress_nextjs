'use client';

import { useState } from 'react';

export default function Form() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      console.log('Fetch response:', res); // Log the fetch response

      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  console.log('Status:', status); // Log the status state
  console.log('Error:', error); // Log the error state

  return (
    <div className='w-full md:max-w-md'>
      <form
        name='feedback'
        data-netlify-recaptcha='true'
        onSubmit={handleFormSubmit}
        className='text-black flex flex-col gap-3 align-center'
      >
        <input type='hidden' name='form-name' value='feedback' />
        <input name='name' type='text' placeholder='Name' required />
        <input
          name='email'
          type='text'
          placeholder='Email (required)'
          required
        />
        <input
          name='phone'
          type='text'
          placeholder='Phone (required)'
          required
        />
        <textarea
          name='message'
          type='text'
          placeholder='Message'
          required
          className='h-60 w-120 text-left align-top'
        />
        <button
          type='submit'
          disabled={status === 'pending'}
          className='text-green-200 hover:underline hover:text-indigo-400 mx-auto'
        >
          Submit
        </button>
        {status === 'ok' && (
          <div>
            <SuccessIcon />
            Submitted!
          </div>
        )}
        {status === 'error' && (
          <div>
            <ErrorIcon />
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

function SuccessIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='stroke-current shrink-0 h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='stroke-current shrink-0 h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
}
