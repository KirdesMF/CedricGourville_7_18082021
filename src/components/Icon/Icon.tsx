import * as styles from './icon.css';
import { IconVariants } from './icon.css';
import {
  Cross2Icon,
  SunIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

const icons = {
  Cross2Icon,
  SunIcon,
  HamburgerMenuIcon,
  PersonIcon,
};

type IconProps = {
  name: keyof typeof icons;
  variant?: IconVariants;
};

export function Icon({ name, variant }: IconProps) {
  const Component = icons[name];
  return <Component className={styles.icon(variant)}></Component>;
}
