import { AppBar, Tab, Tabs } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import TabPanel from 'src/shared/components/TabPanel';
import { a11yProps } from 'src/helpers/a11yProps';
import AppLayout from '../AppLayout';
import PeriodContainer from 'src/modules/period/components/PeriodContainer';
import CourseManageContainer from 'src/modules/course/components/CourseManageContainer';

const ManageContainer: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <AppLayout>
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
            <Tab label="Periodos" {...a11yProps(0)} />
            <Tab label="Cursos" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <PeriodContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CourseManageContainer />
        </TabPanel>
      </AppLayout>
    </>
  );
};

export default ManageContainer;
