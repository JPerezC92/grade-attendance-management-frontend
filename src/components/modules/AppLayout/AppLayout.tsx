import { useState } from 'react';
import Image from 'next/image';
import { AppBar, Toolbar } from '@material-ui/core';
import classNames from 'classnames/bind';
import { FaHamburger } from 'react-icons/fa';

import { AppNavigation } from '../AppNavigation/AppNavigation';
import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import styles from './AppLayout.module.scss';
import { AppMenu } from '../AppMenu/AppMenu';

const cx = classNames.bind(styles);

interface AppLayoutProps {
  Menu?: React.FC<{ className?: string }>;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, Menu }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const MenuComponent = Menu ? Menu : AppMenu;

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

          <picture>
            <Image
              src={SenatiLogoNameV2}
              alt="logo senati with institution name"
              layout="responsive"
            />
          </picture>
        </Toolbar>
      </AppBar>

      <div
        className={cx({
          wrapperNavigationContent: true,
          wrapperNavigationContent__2column: toggleNavigation,
        })}
      >
        <AppNavigation
          className={cx({ navigation: true, openNavigation: toggleNavigation })}
        >
          <MenuComponent />
        </AppNavigation>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
