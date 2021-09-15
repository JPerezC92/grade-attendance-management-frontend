import Image from 'next/image';
import SenatiLogo from 'src/static/senati-logo.png';
import styles from './FormLogo.module.scss';

const FormLogo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Image src={SenatiLogo} />
    </div>
  );
};

export default FormLogo;
