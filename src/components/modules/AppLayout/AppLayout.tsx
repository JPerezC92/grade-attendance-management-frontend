import { useState } from 'react';
import Image from 'next/image';
import { AppBar, Toolbar } from '@material-ui/core';
import classNames from 'classnames/bind';
import { CgMenuGridO } from 'react-icons/cg';

import { AppNavigation } from '../AppNavigation/AppNavigation';
import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import { AppMenu } from '../AppMenu/AppMenu';
import { UserOptionIcon } from '../UserOptionIcon/UserOptionIcon';
import styles from './AppLayout.module.scss';
const cx = classNames.bind(styles);

interface AppLayoutProps {
  CustomMenu?: React.FC<{ className?: string }>;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  CustomMenu,
}) => {
  const MenuComponent = CustomMenu ? CustomMenu : AppMenu;
  const [toggleNavigation, setToggleNavigation] = useState(false);

  return (
    <div className={styles.appRootContainer}>
      <AppBar position="static">
        <Toolbar className={styles.header}>
          <span
            className={styles.header__hamburguer}
            onClick={() => setToggleNavigation((toggle) => (toggle = !toggle))}
          >
            <CgMenuGridO />
          </span>

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
