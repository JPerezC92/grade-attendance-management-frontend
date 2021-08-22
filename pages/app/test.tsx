import { AppLayout } from 'src/components/modules';

const Custom: React.FC<{ className: string }> = ({ className }) => (
  <div className={className}>miadsdasdsami</div>
);

const test: React.FC = () => {
  return <AppLayout Menu={Custom}>dsadsa</AppLayout>;
};

export default test;
