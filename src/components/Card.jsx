import Text from './Text.jsx';

export default function Card({ children, className = '', ...props }) {
  return (
    <section
      className={`flex w-full max-w-sm flex-col items-center justify-center gap-3 rounded bg-blue-300 p-8 shadow-sm ${className}`}
      {...props}
    >
      <Text as="h1" className="font-bold">
        CRIAR CONTA
      </Text>
      {children}
    </section>
  );
}
