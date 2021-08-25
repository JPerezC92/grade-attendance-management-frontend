import NextLink from 'next/link';
import { Box, MenuItem, MenuList, Typography } from '@material-ui/core';
import { CreateFileButton } from './CreateFileButton';
import { CreateFolderButton } from './CreateFolderButton ';
import styles from './AppMenu.module.scss';
import { RecordRoute } from 'src/routes/record.routepath';
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
            <MenuItem>
              <NextLink href={RecordRoute.ROOT('0')}>
                <Typography component="a" variant="body1" color="textPrimary">
                  Registro 1
                </Typography>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href={RecordRoute.ROOT('0')}>
                <Typography component="a" variant="body1" color="textPrimary">
                  Registro 2
                </Typography>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href={RecordRoute.ROOT('0')}>
                <Typography component="a" variant="body1" color="textPrimary">
                  Registro 3
                </Typography>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href={RecordRoute.ROOT('0')}>
                <Typography component="a" variant="body1" color="textPrimary">
                  Registro 4
                </Typography>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href={RecordRoute.ROOT('0')}>
                <Typography component="a" variant="body1" color="textPrimary">
                  Registro 5
                </Typography>
              </NextLink>
            </MenuItem>

            <MenuItem>Final</MenuItem>
          </MenuList>
        </Box>
      </Box>
    </>
  );
};
