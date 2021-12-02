import * as styles from './icon.css';
import { forwardRef } from 'react';
import { IconVariants } from './icon.css';
import {
  Cross2Icon,
  SunIcon,
  HamburgerMenuIcon,
  PersonIcon,
  ChatBubbleIcon,
  GitHubLogoIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  Pencil1Icon,
  PaperPlaneIcon,
  ImageIcon,
  DotsVerticalIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import { cx } from '@app/utils/classname.utils';

const HeartIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={15}
      height={15}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
});

const Groupomania = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 15c2.01 0 3.893-.771 5.311-2.189A7.448 7.448 0 0015 7.5c0-2.01-.771-3.894-2.189-5.311A7.449 7.449 0 007.5 0C5.49 0 3.606.772 2.189 2.189A7.449 7.449 0 000 7.5c0 2.01.772 3.893 2.189 5.311A7.448 7.448 0 007.5 15zm.43-1.274c-.143.018-.286.018-.43.018-.197 0-.395-.018-.592-.036a10.908 10.908 0 01-1.418-3.212h3.176c.108.27.305.52.539.682-.305.897-.736 1.74-1.274 2.548zm1.705-.359c.341-.628.61-1.256.825-1.92.52-.107.933-.466 1.13-.95h1.383c-.718 1.31-1.92 2.332-3.338 2.87zM13.726 7.5c0 .592-.09 1.166-.233 1.722h-1.938a1.64 1.64 0 00-.502-.61c.035-.394.053-.789.053-1.184 0-.556-.035-1.112-.107-1.65h2.476c.18.538.251 1.13.251 1.722zm-.754-2.996h-2.188a12.08 12.08 0 00-1.041-2.817c1.364.52 2.512 1.543 3.23 2.817zM9.85 7.428c0 .305-.017.61-.035.915-.503.108-.915.43-1.113.88H5.24a12.505 12.505 0 01-.125-1.633c0-.341.018-.682.053-1.023.467-.09.844-.395 1.077-.79h3.499c.072.539.107 1.095.107 1.651zM7.033 1.292c.162-.018.323-.018.467-.018.18 0 .359 0 .538.018a10.91 10.91 0 011.418 3.212H6.334a1.715 1.715 0 00-.556-.772c.322-.861.735-1.669 1.255-2.44zM5.33 1.65a13.281 13.281 0 00-.79 1.794 1.587 1.587 0 00-1.184 1.04h-1.31A6.306 6.306 0 015.33 1.652zM1.274 7.5c0-.592.09-1.184.251-1.722h1.956c.108.197.269.376.448.52-.035.43-.071.861-.071 1.292 0 .556.036 1.094.107 1.632h-2.44A5.562 5.562 0 011.274 7.5zm2.907 2.979c.233.968.574 1.92 1.04 2.817a6.287 6.287 0 01-3.193-2.817H4.18z" />
    </svg>
  );
});

const FlagIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      width={15}
      height={15}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
        clipRule="evenodd"
      />
    </svg>
  );
});

const ArchiveIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      width={15}
      height={15}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
      />
    </svg>
  );
});

const GroupUsersIcon = forwardRef<SVGSVGElement>((props, ref) => {
  return (
    <svg
      ref={ref}
      {...props}
      width={15}
      height={15}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
});

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
  PaperPlaneIcon,
  ImageIcon,
  DotsVerticalIcon,
  TrashIcon,
  HeartIcon,
  FlagIcon,
  ArchiveIcon,
  GroupUsersIcon,
  ChevronLeftIcon,
};

type IconProps = {
  name: keyof typeof icons;
  variant?: IconVariants;
} & JSX.IntrinsicElements['svg'];

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const Component = icons[props.name];

  const cls = props.className
    ? cx([props.className, styles.icon(props.variant)])
    : styles.icon(props.variant);
  return <Component ref={ref} className={cls} />;
});
