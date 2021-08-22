import Image from 'next/image';
import Instructor from 'src/static/instructor.svg';
import styles from './Avatar.module.scss';

export const Avatar: React.FC = () => (
  <div className={styles.avatar}>
    <Image src={Instructor}></Image>
  </div>
);
