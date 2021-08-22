import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, []);

  return null;
};
