import { Department, User } from '@server/types';
import * as styles from './avatar.css';
import type { AvatarVariant } from './avatar.css';
import { cx } from '../../utils/classname.utils';

const FILL_COLOR_DPT: Record<Department, string> = {
  VISITOR: 'hsl(210, 13%, 94%)',
  COM: 'hsl(345, 76%, 58%)',
  DIRECTION: 'hsl(219, 45%, 39%)',
  SOCIAL: 'hsl(50, 100%, 50%)',
  TECH: 'hsl(180, 100%, 33%)',
};

export function AvatarSvg({ department }: { department: Department }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 259.3 259.3"
      width="100%"
      height="100%"
    >
      <g stroke="hsl(0, 10%, 10%)" strokeWidth={7} strokeMiterlimit={10}>
        <circle
          stroke="none"
          strokeWidth={0}
          fill={FILL_COLOR_DPT[department]}
          cx={129.6}
          cy={129.6}
          r={124.2}
        />
        <path
          fill="none"
          d="M51.1 225.5s-2.2-88.6 78.1-88.6 76.7 76.9 76.9 89.6c0 0-71 61.8-155-1"
        />

        <path
          fill="#E8D7C5"
          d="M173.9 64.5c5.8 8.5 9.1 18.8 9.1 29.8 0 29.5-23.9 53.4-53.4 53.4s-53.4-23.9-53.4-53.4 23.9-53.4 53.4-53.4c18.5 0 34.7 9.4 44.3 23.6"
        />
        <path
          fill="none"
          strokeLinecap="round"
          d="M106 114.6c1.4 1.4 10.4 10.4 24.5 9.9 13.3-.5 21.3-8.9 22.8-10.6"
        />
        <path fill="none" strokeLinecap="round" d="M85.5 206.5L85.5 244.9" />
        <path fill="none" strokeLinecap="round" d="M172.5 206.5L172.5 244.9" />
      </g>
    </svg>
  );
}

type AvatarProps = {
  user: Pick<User, 'avatar' | 'department'>;
  variant?: AvatarVariant;
  className?: string;
};

export function Avatar({ user, variant, className }: AvatarProps) {
  const cls = className
    ? cx([styles.avatar(variant), className])
    : styles.avatar(variant);

  if (!user.avatar)
    return (
      <div className={cls}>
        <AvatarSvg department={user.department} />
      </div>
    );

  return (
    <div className={cls}>
      <img className={styles.imgAvatar} src={user.avatar} alt="Avatar profil" />
    </div>
  );
}
