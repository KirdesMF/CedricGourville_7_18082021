import { ReactNode, MouseEventHandler } from 'react';
import * as styles from './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: styles.ButtonVariants;
};
export function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button(variant)}>
      {children}
    </button>
  );
}
