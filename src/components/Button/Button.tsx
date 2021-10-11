import * as styles from './button.css';

type ButtonProps = {
  variant?: styles.ButtonVariants;
};

export function Button({
  children,
  variant,
  ...btnProps
}: ButtonProps & JSX.IntrinsicElements['button']) {
  return (
    <button {...btnProps} className={styles.button(variant)}>
      {children}
    </button>
  );
}
