import NextLink from 'next/link';
import { Box, MenuItem, MenuList, Typography } from '@material-ui/core';
import { CreateFileButton } from './CreateFileButton';
import { CreateFolderButton } from './CreateFolderButton ';
import styles from './AppMenu.module.scss';
import { RecordRoute } from 'src/routes/record.routepath';
import { useAppSelector } from 'src/redux';
interface AppMenuProps {
  className?: string;
}

export const AppMenu: React.FC<AppMenuProps> = ({ className }) => {
  const { recentFiles } = useAppSelector((state) => state.fileSystemReducer);

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
            {recentFiles.map((fileDetail) => (
              <MenuItem key={fileDetail.id}>
                <NextLink href={RecordRoute.ROOT(fileDetail.id)}>
                  <Typography component="a" variant="body1" color="textPrimary">
                    {fileDetail.name}
                  </Typography>
                </NextLink>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </Box>
    </>
  );
};
