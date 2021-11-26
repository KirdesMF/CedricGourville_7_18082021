import { cx } from '../../utils/classname.utils';
import * as styles from './button.css';

type ButtonProps = {
  variant: styles.ButtonVariants;
};

export function Button({
  children,
  variant,
  className,
  ...btnProps
}: ButtonProps & JSX.IntrinsicElements['button']) {
  const cls = className
    ? cx([className, styles.button(variant)])
    : styles.button(variant);

  return (
    <button {...btnProps} className={cls}>
      {children}
    </button>
  );
}
