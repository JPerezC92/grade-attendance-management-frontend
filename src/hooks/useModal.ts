import { useState } from 'react';

type isOpen = boolean;
type handleOpenModal = () => void;
type handleCloseModal = () => void;

export interface UseModalResult {
  isOpen: isOpen;
  handleOpenModal: handleOpenModal;
  handleCloseModal: handleCloseModal;
}

export interface UseModal {
  (): UseModalResult;
}

export const useModal: UseModal = () => {
  const [isOpen, setIspen] = useState(false);

  const handleCloseModal = () => {
    setIspen(() => false);
  };

  const handleOpenModal = () => {
    setIspen(() => true);
  };

  return { isOpen, handleOpenModal, handleCloseModal };
};
