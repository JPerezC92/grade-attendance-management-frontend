import { Box, MenuItem, MenuList } from '@material-ui/core';

export const RecordMenu: React.FC = () => {
  return (
    <Box>
      <MenuList>
        <MenuItem>Calificaciones</MenuItem>
        <MenuItem>Asistencias</MenuItem>
      </MenuList>
    </Box>
  );
};
