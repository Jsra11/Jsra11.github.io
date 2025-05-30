import { useCounter } from './useCounter';

export default function NumeroAnimado({ target, className = '' }) {
  const count = useCounter(target);
  return (
    <p className={`text-3xl md:text-5xl font-bold ${className}`}>
      {count}
    </p>
  );
}