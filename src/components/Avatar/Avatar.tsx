import { Department, User } from 'p7_types';
import { vars } from '../../styles/vars.css';
import * as styles from './avatar.css';

const FILL_COLOR_DPT: Record<Department, string> = {
  VISITOR: 'hsl(350, 30%, 60%)',
  COM: 'hsl(50, 30%, 30%)',
  DIRECTION: 'hsl(150, 30%, 30%)',
  SOCIAL: 'hsl(250, 30%, 30%)',
  TECH: 'hsl(1750, 30%, 30%)',
};

export function AvatarSvg({ department }: { department: Department }) {
  return (
    <svg
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 259.3 259.3"
    >
      <g stroke="#000" strokeMiterlimit={10}>
        <circle
          fill={FILL_COLOR_DPT[department]}
          strokeWidth={10.8002}
          cx={129.6}
          cy={129.6}
          r={124.2}
        />
        <path
          fill={vars.colors.primary9}
          strokeWidth={10}
          d="M51.1 225.5s-2.2-88.6 78.1-88.6 76.7 76.9 76.9 89.6c0 0-71 61.8-155-1"
        />

        <path
          fill="#E8D7C5"
          strokeWidth={10}
          d="M173.9 64.5c5.8 8.5 9.1 18.8 9.1 29.8 0 29.5-23.9 53.4-53.4 53.4s-53.4-23.9-53.4-53.4 23.9-53.4 53.4-53.4c18.5 0 34.7 9.4 44.3 23.6"
        />
        <path
          fill="none"
          strokeWidth={10}
          strokeLinecap="round"
          d="M106 114.6c1.4 1.4 10.4 10.4 24.5 9.9 13.3-.5 21.3-8.9 22.8-10.6"
        />
        <path
          fill="none"
          strokeWidth={10}
          strokeLinecap="round"
          d="M85.5 206.5L85.5 244.9"
        />
        <path
          fill="none"
          strokeWidth={10}
          strokeLinecap="round"
          d="M172.5 206.5L172.5 244.9"
        />
      </g>
    </svg>
  );
}

type AvatarProps = { user: Pick<User, 'avatar' | 'department'> };

export function Avatar({ user }: AvatarProps) {
  if (!user.avatar) return <AvatarSvg department={user.department} />;

  return (
    <div className={styles.avatar}>
      <img className={styles.imgAvatar} src={user.avatar} alt="Avatar profil" />
    </div>
  );
}
