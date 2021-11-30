import { useUsers } from '../../api/user.api';
import { usePosts } from '../../api/post.api';
import * as styles from './dashboard.css';

export function Dashboard() {
  const { data: posts } = usePosts();
  const { data: users } = useUsers();

  console.log(users);
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <section>
          {users?.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </section>

        <section>
          {posts?.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </section>
      </div>
    </main>
  );
}
