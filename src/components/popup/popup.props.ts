import { ReactNode } from 'react';

export interface PopupProps {
  children: ReactNode;
  onClose: () => void;
}
