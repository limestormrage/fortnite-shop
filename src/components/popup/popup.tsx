/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import Portal from '../portal/portal';
import styles from './popup.module.scss';
import { PopupProps } from './popup.props';

export default function Popup({ children, isOpened, onClose }: PopupProps): JSX.Element | null {
  // Закрывает модальное окно при нажатии на Esc
  useEffect(() => {
    const handleKyeDows = (evt: KeyboardEvent): void => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKyeDows);
  }, [onClose]);

  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.popup} role="dialog">
        <div
          className={styles.overlay}
          onClick={onClose}
        />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
}
