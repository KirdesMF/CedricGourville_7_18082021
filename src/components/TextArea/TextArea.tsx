import {
  FieldErrors,
  FieldPath,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { Span } from '../Span/Span';

export type TCustomInput<TFields> = {
  label: string;
  register: UseFormRegister<TFields>;
  name: FieldPath<TFields>;
  options?: RegisterOptions<TFields>;
  errors: FieldErrors;
} & JSX.IntrinsicElements['textarea'];

export function CustomTextArea<TFields>(props: TCustomInput<TFields>) {
  const { label, register, name, options, errors, ...rest } = props;

  return (
    <label className={utilities({ display: 'grid', gap: 'xs' })}>
      <span className={srOnly}>{label}</span>
      <textarea {...register(name, options)} {...rest}></textarea>
      {errors?.[name] && (
        <Span variant={{ color: 'secondary' }}>{errors?.[name]?.message}</Span>
      )}
    </label>
  );
}
