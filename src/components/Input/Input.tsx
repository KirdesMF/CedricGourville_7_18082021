import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import * as styles from './input.css';

export function Input({
  label,
  id,
  ...props
}: { label?: string } & JSX.IntrinsicElements['input']) {
  return (
    <div className={utilities({ display: 'grid', gap: 'xs' })}>
      <label htmlFor={id} className={srOnly}>
        {label}
      </label>
      <input id={id} className={styles.input} {...props} />
    </div>
  );
}
