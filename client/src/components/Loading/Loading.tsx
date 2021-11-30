import * as styles from './loading.css';

export function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.circle}></div>
        <div
          className={styles.circle}
          style={{ ['--delay' as string]: '-500ms' }}
        ></div>
      </div>
    </main>
  );
}
