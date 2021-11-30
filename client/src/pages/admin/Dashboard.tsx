import { usePosts } from '../../api/post.api';
import * as styles from './dashboard.css';

export function Dashboard() {
  const { data: posts } = usePosts();

  return (
    <main className={styles.main}>
      <div className={styles.inner}>DashBoard</div>
    </main>
  );
}
