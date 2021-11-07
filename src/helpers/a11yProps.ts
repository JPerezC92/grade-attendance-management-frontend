export function a11yProps(
  index: number
): {
  id: string;
  'aria-controls': string;
} {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
