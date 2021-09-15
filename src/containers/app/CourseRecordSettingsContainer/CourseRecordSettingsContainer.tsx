// import styles from './CourseRecordSettingsStudentContainer.module.scss';

import { AppBar, Tab, Tabs } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { RecordLayout, TabPanel } from 'src/components/modules';
import {
  SettingsTabStudent,
  SettingsTabAttendance,
  SettingsTabActivity,
} from 'src/components/modules/app/record';

function a11yProps(index: number) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export const CourseRecordSettingsContainer: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <RecordLayout>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Estudiantes" {...a11yProps(0)} />
            <Tab label="Actividades" {...a11yProps(1)} />
            <Tab label="Asistencias" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <SettingsTabStudent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SettingsTabActivity />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SettingsTabAttendance />
        </TabPanel>
      </RecordLayout>
    </>
  );
};
