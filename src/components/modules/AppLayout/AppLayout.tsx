// import classNames from 'classnames/bind';
import { AppBar, MenuItem, MenuList, Paper } from '@material-ui/core';
import Image from 'next/image';
import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import styles from './AppLayout.module.scss';

// const cx = classNames.bind(styles);

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.appRootContainer}>
      <AppBar position="static" className={styles.header}>
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
