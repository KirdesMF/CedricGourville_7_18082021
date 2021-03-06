import { utilities } from '../../styles/utilities.css';
import { vars } from '../../styles/vars.css';
import * as styles from './illustration.css';

// TODO
// animation

const Home = () => (
  <svg
    width={'100%'}
    height={'100%'}
    viewBox="0 0 222 206"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="gradient">
        <stop offset="25%" stopColor={vars.colors.base2} />
        <stop offset="95%" stopColor={vars.colors.primary9} />
      </linearGradient>
      <linearGradient id="gradient-primary">
        <stop offset="5%" stopColor={vars.colors.primary5} />
        <stop offset="95%" stopColor={vars.colors.primary9} />
      </linearGradient>
      <linearGradient id="gradient-secondary">
        <stop offset="5%" stopColor={vars.colors.secondary5} />
        <stop offset="95%" stopColor={vars.colors.secondary9} />
      </linearGradient>
      <pattern
        id="a"
        x={0}
        y={0}
        width={40}
        height={40}
        patternUnits="userSpaceOnUse"
        fill="currentColor"
        className={utilities({ color: 'base3' })}
      >
        <path d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z" />
      </pattern>
    </defs>
    <path
      fill="url(#a)"
      d="M196.82 141.658c-33.464 29.821-70.513 50.133-111.148 60.937-40.635 10.805-66.711-4.105-78.228-44.73-11.517-40.624-9.67-78.008 5.541-112.15C28.195 11.573 54.38-3.445 91.539.661c37.158 4.106 72.36 21.177 105.607 51.213s33.138 59.964-.326 89.784z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 103c0-37.828 28.005-69.115 64.413-74.259l.04-.051.05.039C95.934 28.249 99.439 28 103 28c41.421 0 75 33.579 75 75s-33.579 75-75 75-75-33.579-75-75zm134.714 18a62.373 62.373 0 002.637-18c0-6.258-.922-12.3-2.637-18h-24.623a124.846 124.846 0 011.409 27.827 122.246 122.246 0 01-.781 8.173h23.995zm-36.76 0H80.62a109.31 109.31 0 01-.995-9.452A112.164 112.164 0 0181.155 85h44.1a112.138 112.138 0 011.62 27.048 109.605 109.605 0 01-.921 8.952zm9.562-48h22.157c-7.312-13.297-19.333-23.638-33.817-28.778A125.35 125.35 0 01135.516 73zm-28.704-32.237c7.226 10.432 12.297 21.334 15.56 32.237H83.979c3.207-10.898 8.215-21.803 15.37-32.246a63.276 63.276 0 017.463.01zM123.494 133c-3.595 13.422-9.602 24.638-16.685 32.237a63.26 63.26 0 01-6.594.053c-7.222-7.51-13.375-18.762-17.074-32.29h40.353zm1.936 28.195c4.83-8.169 8.636-17.754 11.104-28.195h21.139c-7.045 12.812-18.463 22.88-32.243 28.195zM67 112.327A124.817 124.817 0 0168.328 85H43.286a62.356 62.356 0 00-2.637 18c0 6.258.922 12.301 2.637 18h24.56a121.95 121.95 0 01-.846-8.673zM70.852 73A125.33 125.33 0 0182.42 44.125C67.813 49.23 55.685 59.619 48.327 73h22.525zm-22.525 60h21.758c2.562 10.627 6.512 20.353 11.517 28.583C67.36 156.379 55.547 146.131 48.327 133z"
      fill="url(#gradient)"
      className={utilities({ color: 'base7' })}
    />
    <circle
      cx={76}
      cy={79}
      r={15}
      className={styles.circle}
      fill="url(#gradient-primary)"
    />
    <circle
      cx={131}
      cy={128}
      r={15}
      className={styles.circle}
      fill="url(#gradient-secondary)"
    />
  </svg>
);

export function Illustration() {
  return (
    <div className={styles.illustration}>
      <Home />
    </div>
  );
}
