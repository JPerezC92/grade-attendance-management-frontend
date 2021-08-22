// import classNames from 'classnames/bind';
import Image from 'next/image';
import { AppBar, MenuItem, MenuList, Paper } from '@material-ui/core';
import { FaHamburger } from 'react-icons/fa';
import { UserInfo } from '../UserInfo/UserInfo';
import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import styles from './AppLayout.module.scss';

// const cx = classNames.bind(styles);

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.appRootContainer}>
      <AppBar position="static" className={styles.header}>
        <FaHamburger />
        <picture>
          <Image
            src={SenatiLogoNameV2}
            alt="logo senati with institution name"
            layout="responsive"
          />
        </picture>
      </AppBar>

      <div className={styles.wrapper}>
        <Paper>
          <UserInfo
            user={{
              firstname: 'Jhon Doe',
              lastname: 'Test Test',
              email: 'test@email.com',
            }}
          />

          <MenuList>
            <MenuItem>Calificaciones</MenuItem>
            <MenuItem>Asistencias</MenuItem>
          </MenuList>
        </Paper>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
