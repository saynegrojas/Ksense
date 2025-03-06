import React from 'react';
import Button from './ui/Button';

interface FormProps {
  name: string;
  setName: (name: string) => void;
  error: string | null;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ name, setName, error, handleSubmit }: FormProps) {
  return (
    <div className='bg-[var(--card-background)] p-8 rounded-lg shadow-[var(--card-box-shadow)]'>
      <h2 className='text-xl font-bold mb-4'>Payload Submission</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label htmlFor='payloadFullName'>Full Name:</label>
          <input
            id='payloadFullName'
            value={name}
            required
            type='text'
            onChange={(event) => setName(event.target.value)}
            className='p-2 text-base rounded border border-gray-300 mt-2'
          />
        </div>
        <div className='flex flex-col'>
          <Button error={error} label='Send Payload' />
        </div>
      </form>
    </div>
  );
}
