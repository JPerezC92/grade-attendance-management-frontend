import { ReactElement, useState } from 'react';
import NextLink from 'next/link';

import { Link, MenuList, MenuItem } from '@material-ui/core';
import { CgMenuGridO } from 'react-icons/cg';
import classNames from 'classnames/bind';

import UserOptionsIcon from '../UserOptionsIcon';
import AppNavigation from '../AppNavigation';
import Navbar from '../Navbar';
import LogoWithName from '../LogoWithName';
import styles from './AppLayout.module.scss';
import { CourseRoute } from 'src/routes';
import { PeriodRoute } from 'src/routes/period.routepath';

const cx = classNames.bind(styles);

interface AppLayoutProps {
  AsideMenu?: ReactElement;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, AsideMenu }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

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
          <MenuList>
            <MenuItem style={{ gap: '1.5em' }}>
              <NextLink href={CourseRoute.ROOT}>
                <Link color="initial">Cursos</Link>
              </NextLink>
              <NextLink href={PeriodRoute.ROOT}>
                <Link color="initial">Periodos</Link>
              </NextLink>
            </MenuItem>
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
        <AppNavigation
          className={cx({
            navigation: true,
            openNavigation: toggleNavigation,
          })}
        >
          {AsideMenu}
        </AppNavigation>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
