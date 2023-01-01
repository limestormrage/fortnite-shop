import React from 'react';
import Portal from '../portal/portal';
import styles from './popup.module.scss';
import { PopupProps } from './popup.props';

export default function Popup({ children }: PopupProps): JSX.Element {
  return (
    <Portal>
      <div className={styles.popup} role="dialog">
        <div>overlay</div>
        <div>{children}</div>
      </div>
    </Portal>
  );
}
