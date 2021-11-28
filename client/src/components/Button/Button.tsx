import { cx } from '../../utils/classname.utils';
import * as styles from './button.css';
import { forwardRef } from 'react';

type ButtonProps = {
  variant: styles.ButtonVariants;
} & JSX.IntrinsicElements['button'];

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, variant, className, ...btnProps } = props;
    const cls = className
      ? cx([className, styles.button(variant)])
      : styles.button(variant);

    return (
      <button ref={ref} {...btnProps} className={cls}>
        {children}
      </button>
    );
  }
);

// export function Button({
//   children,
//   variant,
//   className,
//   ...btnProps
// }: ButtonProps & JSX.IntrinsicElements['button']) {
//   const cls = className
//     ? cx([className, styles.button(variant)])
//     : styles.button(variant);

//   return (
//     <button {...btnProps} className={cls}>
//       {children}
//     </button>
//   );
// }
