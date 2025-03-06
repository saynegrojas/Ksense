import React from 'react';

interface ButtonProps {
  error: string | null;
  label: string;
}
const Button = ({ error, label }: ButtonProps) => {
  return (
    <>
      {' '}
      <button
        type='submit'
        className='p-3 text-base rounded bg-blue-600 text-white cursor-pointer border-none'
      >
        {label}
      </button>
      {error && <p className='text-red-500'>{error}</p>}
    </>
  );
};

export default Button;
