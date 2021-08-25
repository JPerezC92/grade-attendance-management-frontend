import { useState } from 'react';

type isOpen = boolean;
type handleClickOpen = () => void;
type handleClose = () => void;

export interface UseModalResult {
  isOpen: isOpen;
  handleClickOpen: handleClickOpen;
  handleClose: handleClose;
}

export interface UseModal {
  (): UseModalResult;
}

export const useModal: UseModal = () => {
  const [isOpen, setIspen] = useState(false);

  const handleClose = () => {
    setIspen(() => false);
  };

  const handleClickOpen = () => {
    setIspen(() => true);
  };

  return { isOpen, handleClickOpen, handleClose };
};
