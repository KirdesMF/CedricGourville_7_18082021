import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import * as styles from './input.css';

export function Input({ id, ...props }: JSX.IntrinsicElements['input']) {
  return (
    <div className={utilities({ display: 'grid', gap: 'xs' })}>
      <label htmlFor={id} className={srOnly}>
        Enter your email
      </label>
      <input className={styles.input} {...props} />
    </div>
  );
}
