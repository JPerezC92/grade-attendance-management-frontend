import { IconButton } from '@material-ui/core';
import React from 'react';
import { MdArchive } from 'react-icons/md';
import { useAppDispatch } from 'src/redux';
import { startUpdateCourse } from '../../reducer';
import { Course } from '../../types';

interface CourseArchiveButtonProps {
  course: Course;
}

const CourseArchiveButton: React.FC<CourseArchiveButtonProps> = ({
  course,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <IconButton
        color="secondary"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(
            startUpdateCourse({
              ...course,
              status: 'inactivo',
            })
          );
        }}
      >
        <MdArchive style={{ fontSize: '24px' }} />
      </IconButton>
    </>
  );
};

export default CourseArchiveButton;
