import React from 'react';
import Portal from '../portal/portal';
import styles from './popup.module.scss';
import { PopupProps } from './popup.props';

export default function Popup({ children, isOpened }: PopupProps): JSX.Element | null {
  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.popup} role="dialog">
        <div className={styles.overlay}>overlay</div>
        <div>{children}</div>
      </div>
    </Portal>
  );
}
