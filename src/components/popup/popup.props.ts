import { ReactNode } from 'react';

export interface PopupProps {
  children: ReactNode;
  isOpened: boolean;
  onClose: () => void;
}
