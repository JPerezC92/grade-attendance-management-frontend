import Image from 'next/image';
import SenatiLogoNameV2 from 'src/static/senati-logo-name-v2.svg';
import styles from './LogoWithName.module.scss';

const LogoWithName: React.FC = () => {
  return (
    <>
      <picture className={styles.logoWithName}>
        <Image
          src={SenatiLogoNameV2}
          alt="logo senati with institution name"
          layout="responsive"
        />
      </picture>
    </>
  );
};

export default LogoWithName;
