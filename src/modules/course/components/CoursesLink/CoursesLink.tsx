import { CourseRoute } from 'src/routes';
import Link from 'src/shared/components/Link';

interface CoursesLinkProps {}

const CoursesLink: React.FC<CoursesLinkProps> = ({}) => {
  return (
    <>
      <Link href={CourseRoute.ROOT}>Cursos</Link>
    </>
  );
};

export default CoursesLink;
