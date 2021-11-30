import {
  useCurrentUser,
  useUnregisterUserByAdmin,
  useUsers,
} from '../../api/user.api';
import { useDeletePost, usePosts } from '../../api/post.api';
import * as styles from './dashboard.css';
import { Heading } from '../../components/Heading/Heading';
import { Anchor } from '../../components/Anchor/Anchor';
import { Popover } from '../../components/Popover/Popover';

export function Dashboard() {
  const { data: posts } = usePosts();
  const { data: users } = useUsers();
  const { mutate: deletePost } = useDeletePost();
  const { mutate: deleteUser } = useUnregisterUserByAdmin();
  const { data: currentUser } = useCurrentUser();

  const isAdmin = currentUser?.role === 'ADMIN';
  const handleDeletePost = (id: string) => deletePost({ id });

  const notAdminUsers = users?.filter((user) => user.role !== 'ADMIN');

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <section>
          <Heading variant={{ fontSize: 'md' }}>All Users</Heading>
          <ul>
            {notAdminUsers?.map((user) => (
              <li key={user.id}>
                <Anchor to={`/users/${user.id}`}>{user.username}</Anchor>
                <Popover
                  isAdminOrUser={isAdmin}
                  handleDeletePost={() => deleteUser({ id: user.id })}
                />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <Heading variant={{ fontSize: 'md' }}>All Posts</Heading>

          <ul>
            {posts?.map((post) => (
              <li key={post.id}>
                <Anchor to={`/posts/${post.id}`}>{post.title}</Anchor>
                <Popover
                  isAdminOrUser={isAdmin}
                  handleDeletePost={() => handleDeletePost(post.id)}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
