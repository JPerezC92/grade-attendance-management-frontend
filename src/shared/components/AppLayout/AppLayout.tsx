import { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import classNames from 'classnames/bind';

import AppMenu from '../AppMenu';
import UserOptionsIcon from '../UserOptionsIcon';
import AppNavigation from '../AppNavigation';
import Navbar from '../Navbar';
import LogoWithName from '../LogoWithName';
import styles from './AppLayout.module.scss';

const cx = classNames.bind(styles);

interface AppLayoutProps {
  CustomMenu?: React.FC<{ className?: string }>;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, CustomMenu }) => {
  const MenuComponent = CustomMenu ? CustomMenu : AppMenu;
  const [toggleNavigation, setToggleNavigation] = useState(false);

  return (
    <div className={styles.appRootContainer}>
      <Navbar
        MenuIcon={
          <span
            className={styles.navbar__hamburguer}
            onClick={() => setToggleNavigation((toggle) => (toggle = !toggle))}
          >
            <CgMenuGridO />
          </span>
        }
        Logo={<LogoWithName />}
        UserOptionsIcon={<UserOptionsIcon />}
      />

      <div
        className={cx({
          wrapperNavigationContent: true,
          wrapperNavigationContent__2column: toggleNavigation,
        })}
      >
        <AppNavigation
          className={cx({
            navigation: true,
            openNavigation: toggleNavigation,
          })}
        >
          <MenuComponent />
        </AppNavigation>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
