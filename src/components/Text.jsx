const textVariants = {
  default: 'text-xl text-black',
  red: 'text-xl text-red-500',
};

export default function Text({
  as = 'span',
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  const Component = as;

  return (
    <Component className={`${textVariants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
