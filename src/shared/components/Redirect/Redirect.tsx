import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, []);

  return null;
};

export default Redirect;
