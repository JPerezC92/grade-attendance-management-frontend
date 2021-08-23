import Image from 'next/image';
import Instructor from 'src/static/instructor.svg';
import styles from './UserAvatar.module.scss';

export const UserAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`${styles.avatar} ${className}`}>
    <Image src={Instructor}></Image>
  </div>
);
