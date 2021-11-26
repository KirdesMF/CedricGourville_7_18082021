import * as styles from './guides.css';

export function Guides() {
  return (
    <div className={styles.guides}>
      {[1, 2, 3, 4].map((el) => (
        <div key={el} className={styles.line}></div>
      ))}
    </div>
  );
}
