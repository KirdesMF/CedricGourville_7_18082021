import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import * as styles from './input.css';

export function Input() {
  return (
    <div className={utilities({ display: 'grid', gap: 'sm' })}>
      <label htmlFor="email" className={srOnly}>
        Email
      </label>
      <input
        className={styles.input}
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <small className={styles.small}>Errors</small>
    </div>
  );
}
