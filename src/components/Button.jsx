import React from 'react';
import Text from './Text.jsx';

const buttonVariants = {
  default: 'bg-blue-500 hover:bg-blue-600',
  primary: 'bg-blue-300 hover:bg-blue-400',
};

export default function Button({
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  return (
    <Text
      as="button"
      variant="default"
      className={`flex cursor-pointer items-center justify-center rounded p-3 transition-colors ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
