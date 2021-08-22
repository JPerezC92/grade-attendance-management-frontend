import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { AppBar, MenuItem, Toolbar, MenuList } from '@material-ui/core';
import { FaHamburger } from 'react-icons/fa';
import { AppNavigation } from '../AppNavigation/AppNavigation';
import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import styles from './AppLayout.module.scss';

const cx = classNames.bind(styles);

interface AppLayoutProps {
  Menu?: React.FC<{ className?: string }>;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, Menu }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const MenuComponent = Menu ? (
    <Menu />
  ) : (
    <MenuList>
      <MenuItem>Calificaciones</MenuItem>
      <MenuItem>Asistencias</MenuItem>
    </MenuList>
  );

  return (
    <div className={styles.appRootContainer}>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <span
            className={styles.header__hamburguer}
            onClick={() => setToggleNavigation((state) => (state = !state))}
          >
            <FaHamburger />
          </span>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton> */}
          <picture>
            <Image
              src={SenatiLogoNameV2}
              alt="logo senati with institution name"
              layout="responsive"
            />
          </picture>
        </Toolbar>
      </AppBar>

      <div className={styles.wrapper}>
        <AppNavigation
          className={cx({ openNavigation: toggleNavigation, navigation: true })}
        >
          {MenuComponent}
        </AppNavigation>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
