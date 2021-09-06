import Image from 'next/image';
import { Tooltip, Typography } from '@material-ui/core';
import { Course } from 'src/interfaces';
import courseImg from 'src/static/course-image.jpg';
import styles from './CourseCard.module.scss';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <>
      <div className={styles.courseCard}>
        <div className={styles.courseCard__img}>
          <Image
            src={courseImg}
            layout="intrinsic"
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>

        <div className={styles.courseCard__content}>
          <Tooltip title={course.name} arrow>
            <Typography
              variant="subtitle2"
              component="h2"
              noWrap
              align="center"
            >
              {course.name}
            </Typography>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
