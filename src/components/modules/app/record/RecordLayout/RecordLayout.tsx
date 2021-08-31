import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppLayout } from '../../AppLayout/AppLayout';
import { RecordMenu } from '../RecordMenu';
import { useAppSelector } from 'src/redux';

export const RecordLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const { currentFile } = useAppSelector((state) => state.fileSystemReducer);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(router.query);
  }, [router.query]);
  if (!currentFile) {
    return null;
  }

  return <AppLayout CustomMenu={RecordMenu}>{children}</AppLayout>;
};
