import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as styles from './modal.css';

function setAriaHidden(isOpen: boolean) {
  const root = document.querySelector('#root');
  isOpen
    ? root?.setAttribute('aria-hidden', 'true')
    : root?.setAttribute('aria-hidden', 'false');
}

export function Modal({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  useEffect(() => {
    setAriaHidden(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <aside className={styles.modal}>{children}</aside>,
    document.body
  );
}
