import { CircleAlert } from 'lucide-react';

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 rounded-md flex items-center gap-x-3 text-sm text-destructive">
      <CircleAlert width={24} height={24} className="text-red-500" />
      <p>{message}</p>
    </div>
  );
};
