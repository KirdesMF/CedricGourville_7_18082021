import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { Span } from '../Span/Span';
import * as styles from './input.css';

type InputProps<T> = {
  label: string;
  register: UseFormRegister<T>;
  name: keyof T;
  options?: RegisterOptions;
  errors: FieldErrors;
} & JSX.IntrinsicElements['input'];

export function Input<T>({
  label,
  register,
  name,
  options,
  errors,
  ...rest
}: InputProps<T>) {
  return (
    <label className={utilities({ display: 'grid', gap: 'xs' })}>
      <span className={srOnly}>{label}</span>
      <input {...register(name, options)} className={styles.input} {...rest} />
      {errors[name] && (
        <Span variant={{ color: 'secondary' }}>{errors[name]?.message}</Span>
      )}
    </label>
  );
}

export function BasicInput({
  label,
  ...rest
}: { label?: string } & JSX.IntrinsicElements['input']) {
  return (
    <label className={utilities({ display: 'grid', gap: 'xs' })}>
      <span className={srOnly}>{label}</span>
      <input className={styles.input} {...rest} />
    </label>
  );
}
