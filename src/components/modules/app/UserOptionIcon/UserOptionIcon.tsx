import { useState } from 'react';
import { Box, MenuItem, Typography, Menu } from '@material-ui/core';
import { UserAvatar } from 'src/components/common';
import { UserInfoCard } from '../UserInfoCard';
import styles from './UserOptionIcon.module.scss';
import { useAuthentication } from 'src/hooks/useAuthentication';

export const UserOptionIcon: React.FC = () => {
  const { handleLogout } = useAuthentication();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(() => null);
  };

  return (
    <>
      <Box onClick={handleClick}>
        <UserAvatar className={styles.userAvatar} />
      </Box>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box onClick={handleClose}>
          <UserInfoCard
            user={{
              firstname: 'Jhon Doe',
              lastname: 'Test Test',
              email: 'test@email.com',
            }}
          />
        </Box>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography color="secondary">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
