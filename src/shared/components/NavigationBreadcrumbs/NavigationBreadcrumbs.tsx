import { Breadcrumbs } from '@material-ui/core';

interface NavigationBreadcrumbsProps {
  BreadcrumbItem?: React.FC[];
}

const NavigationBreadcrumbs: React.FC<NavigationBreadcrumbsProps> = ({
  children,
}) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">{children}</Breadcrumbs>
    </>
  );
};

export default NavigationBreadcrumbs;
