import { ReactElement, useState } from 'react';

import { MenuList, MenuItem } from '@material-ui/core';
import { CgMenuGridO } from 'react-icons/cg';
import classNames from 'classnames/bind';

import UserOptionsIcon from '../UserOptionsIcon';
import AppNavigation from '../AppNavigation';
import Navbar from '../Navbar';
import LogoWithName from '../LogoWithName';
import Link from '../Link';
import { CourseRoute } from 'src/routes';
import { ManageRoute } from 'src/routes/manage.routepath';
import styles from './AppLayout.module.scss';

const cx = classNames.bind(styles);

interface AppLayoutProps {
  AsideMenu?: ReactElement;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, AsideMenu }) => {
  const [toggleNavigation, setToggleNavigation] = useState(
    AsideMenu ? true : false
  );

  return (
    <div className={styles.appRootContainer}>
      <Navbar
        MenuIcon={
          AsideMenu ? (
            <span
              className={styles.navbar__hamburguer}
              onClick={() =>
                setToggleNavigation((toggle) => (toggle = !toggle))
              }
            >
              <CgMenuGridO />
            </span>
          ) : null
        }
        NavigationElements={
          <MenuList style={{ gap: '1em', display: 'flex' }}>
            <Link href={CourseRoute.ROOT}>
              <MenuItem component="a" color="initial">
                Cursos
              </MenuItem>
            </Link>

            <Link href={ManageRoute.ROOT}>
              <MenuItem component="a" color="initial">
                Gestionar
              </MenuItem>
            </Link>
          </MenuList>
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
        {AsideMenu && (
          <AppNavigation
            className={cx({
              navigation: true,
              openNavigation: toggleNavigation,
            })}
          >
            {AsideMenu}
          </AppNavigation>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
