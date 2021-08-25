import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppLayout } from '../../AppLayout/AppLayout';
import { RecordMenu } from '../RecordMenu';

export const RecordLayout: React.FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(router.query);
  }, [router.query]);

  return <AppLayout CustomMenu={RecordMenu}>{children}</AppLayout>;
};
