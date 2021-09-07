import { useRouter } from 'next/router';
import Image from 'next/image';
import { FiMoreVertical } from 'react-icons/fi';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { Course } from 'src/interfaces';
import courseImg from 'src/static/course-image.jpg';
import styles from './CourseCard.module.scss';
import { CourseRoute } from 'src/routes/course.routepath';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={styles.courseCard}
        onClick={() => router.push(CourseRoute.COURSE(course.id))}
      >
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          className={styles.courseCard__moreIcon}
        >
          <FiMoreVertical />
        </IconButton>

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
