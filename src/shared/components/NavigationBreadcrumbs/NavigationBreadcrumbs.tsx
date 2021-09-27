import { Breadcrumbs } from '@material-ui/core';

const NavigationBreadcrumbs: React.FC = ({ children }) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">{children}</Breadcrumbs>
    </>
  );
};

export default NavigationBreadcrumbs;
