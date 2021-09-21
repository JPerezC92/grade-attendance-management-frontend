import UserOptionsIcon from '../UserOptionsIcon';
import Navbar from '../Navbar';
import LogoWithName from '../LogoWithName';
import styles from './CourseLayout.module.scss';

interface CourseLayoutProps {
  CustomMenu?: React.FC<{ className?: string }>;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appRootContainer}>
      <Navbar Logo={<LogoWithName />} UserOptionsIcon={<UserOptionsIcon />} />

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default CourseLayout;
