import { AppLayout } from '../AppLayout/AppLayout';
import { RecordMenu } from '../RecordMenu/RecordMenu';

export const RecordLayout: React.FC = ({ children }) => {
  return <AppLayout CustomMenu={RecordMenu}>{children}</AppLayout>;
};
