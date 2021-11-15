import * as styles from './icon.css';
import { IconVariants } from './icon.css';
import {
  Cross2Icon,
  SunIcon,
  HamburgerMenuIcon,
  PersonIcon,
  ChatBubbleIcon,
  GitHubLogoIcon,
  ChevronRightIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';

const Groupomania = ({ className }: { className: string }) => {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7.5 15c2.01 0 3.893-.771 5.311-2.189A7.448 7.448 0 0015 7.5c0-2.01-.771-3.894-2.189-5.311A7.449 7.449 0 007.5 0C5.49 0 3.606.772 2.189 2.189A7.449 7.449 0 000 7.5c0 2.01.772 3.893 2.189 5.311A7.448 7.448 0 007.5 15zm.43-1.274c-.143.018-.286.018-.43.018-.197 0-.395-.018-.592-.036a10.908 10.908 0 01-1.418-3.212h3.176c.108.27.305.52.539.682-.305.897-.736 1.74-1.274 2.548zm1.705-.359c.341-.628.61-1.256.825-1.92.52-.107.933-.466 1.13-.95h1.383c-.718 1.31-1.92 2.332-3.338 2.87zM13.726 7.5c0 .592-.09 1.166-.233 1.722h-1.938a1.64 1.64 0 00-.502-.61c.035-.394.053-.789.053-1.184 0-.556-.035-1.112-.107-1.65h2.476c.18.538.251 1.13.251 1.722zm-.754-2.996h-2.188a12.08 12.08 0 00-1.041-2.817c1.364.52 2.512 1.543 3.23 2.817zM9.85 7.428c0 .305-.017.61-.035.915-.503.108-.915.43-1.113.88H5.24a12.505 12.505 0 01-.125-1.633c0-.341.018-.682.053-1.023.467-.09.844-.395 1.077-.79h3.499c.072.539.107 1.095.107 1.651zM7.033 1.292c.162-.018.323-.018.467-.018.18 0 .359 0 .538.018a10.91 10.91 0 011.418 3.212H6.334a1.715 1.715 0 00-.556-.772c.322-.861.735-1.669 1.255-2.44zM5.33 1.65a13.281 13.281 0 00-.79 1.794 1.587 1.587 0 00-1.184 1.04h-1.31A6.306 6.306 0 015.33 1.652zM1.274 7.5c0-.592.09-1.184.251-1.722h1.956c.108.197.269.376.448.52-.035.43-.071.861-.071 1.292 0 .556.036 1.094.107 1.632h-2.44A5.562 5.562 0 011.274 7.5zm2.907 2.979c.233.968.574 1.92 1.04 2.817a6.287 6.287 0 01-3.193-2.817H4.18z" />
    </svg>
  );
};

const icons = {
  Cross2Icon,
  SunIcon,
  HamburgerMenuIcon,
  PersonIcon,
  ChatBubbleIcon,
  Groupomania,
  GitHubLogoIcon,
  ChevronRightIcon,
  Pencil1Icon,
};

type IconProps = {
  name: keyof typeof icons;
  variant?: IconVariants;
};

export function Icon({ name, variant }: IconProps) {
  const Component = icons[name];
  return <Component className={styles.icon(variant)}></Component>;
}
