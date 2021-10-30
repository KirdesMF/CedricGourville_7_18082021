import * as styles from './avatar.css';

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <span className={styles.avatar}>
      <img className={styles.imgAvatar} src={src} alt={alt} />
    </span>
  );
}
