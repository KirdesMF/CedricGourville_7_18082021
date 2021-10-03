import { ReactNode, MouseEventHandler } from 'react';
import * as styles from './button.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button({ discret: true })}>
      {children}
    </button>
  );
}
