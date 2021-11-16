import {
  FieldErrors,
  FieldPath,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { Span } from '../Span/Span';
import * as styles from './input.css';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';

export type TCustomInput<TFields> = {
  label: string;
  register: UseFormRegister<TFields>;
  name: FieldPath<TFields>;
  options?: RegisterOptions<TFields>;
  errors: FieldErrors;
} & JSX.IntrinsicElements['input'];

export function CustomInput<TFields>(props: TCustomInput<TFields>) {
  const { label, register, name, options, errors, ...rest } = props;

  return (
    <label
      className={utilities({
        display: 'grid',
        gap: 'sm',
        position: 'relative',
      })}
    >
      <span className={srOnly}>{label}</span>
      <input {...register(name, options)} {...rest} className={styles.input} />
      {errors?.[name] && (
        <Span variant={{ color: 'secondary', size: 'xs', weight: 'thin' }}>
          {errors?.[name]?.message}
        </Span>
      )}
    </label>
  );
}

export function BasicInput({
  label,
  ...rest
}: { label?: string } & JSX.IntrinsicElements['input']) {
  return (
    <label>
      <span className={srOnly}>{label}</span>
      <input className={styles.input} {...rest} />
    </label>
  );
}
