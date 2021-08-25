import { Box, MenuItem, MenuList, Typography } from '@material-ui/core';
import { CreateFileButton } from './CreateFileButton';
import { CreateFolderButton } from './CreateFolderButton ';
import styles from './AppMenu.module.scss';
interface AppMenuProps {
  className?: string;
}

export const AppMenu: React.FC<AppMenuProps> = ({ className }) => {
  return (
    <>
      <Box className={`${styles.appMenu} ${className}`}>
        <Box className={styles.appMenuButtons}>
          <CreateFileButton />
          <CreateFolderButton />
        </Box>

        <Box>
          <Typography align="center" color="secondary">
            Mas Recientes
          </Typography>
          <MenuList>
            <MenuItem>Registro 1</MenuItem>
            <MenuItem>Registro 2</MenuItem>
            <MenuItem>Registro 3</MenuItem>
            <MenuItem>Registro 4</MenuItem>
            <MenuItem>Registro 5</MenuItem>
            <MenuItem>Registro 6</MenuItem>
            <MenuItem>Registro 7</MenuItem>
            <MenuItem>Registro 8</MenuItem>
            <MenuItem>Registro 9</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>
            <MenuItem>Registro 10</MenuItem>

            <MenuItem>Final</MenuItem>
          </MenuList>
        </Box>
      </Box>
    </>
  );
};
