import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='max-w-[800px] m-auto p-[2rem]'>{children}</div>;
}
