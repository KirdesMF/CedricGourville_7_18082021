import {
  FieldErrors,
  FieldPath,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { srOnly } from '../../styles/helpers.css';
import { utilities } from '../../styles/utilities.css';
import { Span } from '../Span/Span';
import * as styles from './select.css';

export type TCustomInput<TFields> = {
  label: string;
  register: UseFormRegister<TFields>;
  name: FieldPath<TFields>;
  options?: RegisterOptions<TFields>;
  errors: FieldErrors;
  choices: string[];
  customPlaceholder: string;
} & JSX.IntrinsicElements['select'];

const Placeholder = ({ text }: { text: string }) => (
  <option value="" disabled>
    {text}
  </option>
);

export function CustomSelect<TFields>(props: TCustomInput<TFields>) {
  const {
    label,
    register,
    name,
    options,
    errors,
    choices,
    customPlaceholder,
    ...rest
  } = props;

  return (
    <label className={utilities({ display: 'grid', gap: 'xs' })}>
      <span className={srOnly}>{label}</span>
      <select
        className={styles.select}
        defaultValue=""
        {...rest}
        {...register(name, options)}
      >
        <Placeholder text={customPlaceholder} />
        {choices.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      {errors?.[name] && (
        <Span variant={{ color: 'secondary' }}>{errors?.[name]?.message}</Span>
      )}
    </label>
  );
}
