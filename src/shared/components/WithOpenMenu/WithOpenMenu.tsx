import React, { useState, MouseEvent, ReactElement } from 'react';
import { Menu } from '@material-ui/core';
import styles from './WithOpenMenu.module.scss';

interface AnchorElement {
  isSet: boolean;
  value: Element | null;
}

interface WithOpenMenuProps {
  TriggerElement: ({
    handleOpenMenu,
  }: {
    handleOpenMenu: (event: MouseEvent) => void;
  }) => ReactElement | ReactElement[];

  Menu: ({
    anchorElement,
    handleCloseMenu,
  }: {
    anchorElement: AnchorElement;
    handleCloseMenu: () => void;
  }) => ReactElement;
  // MenuItems: ({
  //   handleCloseMenu,
  // }: {
  //   handleCloseMenu: () => void;
  // }) => ReactElement | ReactElement[];
}

const WithOpenMenu: React.FC<WithOpenMenuProps> = ({
  TriggerElement,
  Menu,
  ...rest
}) => {
  const [anchorElement, setAnchorElement] = useState<AnchorElement>({
    isSet: false,
    value: null,
  });

  const handleOpenMenu = (event: MouseEvent) => {
    setAnchorElement(() => ({
      isSet: true,
      value: event.currentTarget,
    }));
  };

  const handleCloseMenu = () => {
    setAnchorElement((state) => ({
      ...state,
      isSet: false,
    }));
  };

  return (
    <>
      {TriggerElement({
        ...rest,
        handleOpenMenu,
      })}

      {Menu({ anchorElement, handleCloseMenu })}

      {/* <Menu
        className={styles.menu}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        id="customized-menu"
        keepMounted
        anchorEl={anchorElement.value}
        open={anchorElement.isSet}
        onClose={handleCloseMenu}
      >
        <MenuItems handleCloseMenu={handleCloseMenu} />
      </Menu> */}
    </>
  );
};

export default WithOpenMenu;
