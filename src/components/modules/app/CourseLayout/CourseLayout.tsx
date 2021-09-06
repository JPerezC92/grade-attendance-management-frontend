import Image from 'next/image';
import { AppBar, Toolbar } from '@material-ui/core';

import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import { UserOptionIcon } from 'src/components/modules';
import styles from './CourseLayout.module.scss';

interface CourseLayoutProps {
  CustomMenu?: React.FC<{ className?: string }>;
}

export const CourseLayout: React.FC<CourseLayoutProps> = ({ children }) => {
  return (
    <div className={styles.appRootContainer}>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <picture>
            <Image
              src={SenatiLogoNameV2}
              alt="logo senati with institution name"
              layout="responsive"
            />
          </picture>
          <div className={styles.header__miscellaneousOptions}>
            <UserOptionIcon />
          </div>
        </Toolbar>
      </AppBar>

      <div className={styles.content}>{children}</div>
    </div>
  );
};
