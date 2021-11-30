import * as styles from './loading.css';

export function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.circle.first}></div>
        <div className={styles.circle.second}></div>
      </div>
    </main>
  );
}
