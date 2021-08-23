import { GradeTable, RecordLayout } from 'src/components/modules';
// import styles from './RecordContainer.module.scss';

export const RecordContainer: React.FC = () => {
  return (
    <>
      <RecordLayout>
        <GradeTable />
      </RecordLayout>
    </>
  );
};
