import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
  size?: string;
  margin?: string;
}
export default function Header({ children, size = 'text-xl', margin = 'mb-4' }: HeaderProps) {
  return <header className={`${size} font-bold mb-4 text-center ${margin}`}>{children}</header>;
}
