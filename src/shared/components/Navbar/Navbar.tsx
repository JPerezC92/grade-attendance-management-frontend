import { AppBar, Toolbar } from '@material-ui/core';
import { ReactElement } from 'react';

import styles from './Navbar.module.scss';

interface NavbarProps {
  MenuIcon?: ReactElement;
  Logo?: ReactElement;
  NavigationElements?: ReactElement;
  UserOptionsIcon?: ReactElement;
}

const Navbar: React.FC<NavbarProps> = ({
  MenuIcon,
  Logo,
  NavigationElements,
  UserOptionsIcon,
}) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className={`${styles.navbar}`}>
          {MenuIcon}

          {Logo}

          <div className={styles.navbar__navigation}>{NavigationElements}</div>

          <div className={styles.navbar__miscellaneousOptions}>
            {UserOptionsIcon}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
