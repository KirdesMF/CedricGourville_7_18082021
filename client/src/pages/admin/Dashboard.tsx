import { useCurrentUser, useUsers } from '../../api/user.api';
import { useDeletePost, usePosts } from '../../api/post.api';
import * as styles from './dashboard.css';
import { Heading } from '../../components/Heading/Heading';
import { Anchor } from '../../components/Anchor/Anchor';
import { PopoverAdmin, PopoverPost } from '../../components/Popover/Popover';
import { convertDate, convertDateToTime } from '../../utils/utils';

export function Dashboard() {
  const { data: posts } = usePosts();
  const { data: users } = useUsers();
  const { mutate: deletePost } = useDeletePost();
  const { data: currentUser } = useCurrentUser();

  const isAdmin = currentUser?.role === 'ADMIN';
  const handleDeletePost = (id: string) => deletePost({ id });

  const notAdminUsers = users?.filter(
    (user) => user.role !== 'ADMIN' && user.department !== 'VISITOR'
  );
  const newUsers = users?.filter((user) => user.department === 'VISITOR');

  console.log(newUsers);

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <Heading variant={{ fontSize: 'xl' }}>Dashboard</Heading>
        {newUsers && (
          <section className={styles.section}>
            <Heading as="h2" variant={{ fontSize: 'md' }}>
              New Users
            </Heading>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th colSpan={1}>Username</th>
                  <th colSpan={1}>email</th>
                  <th colSpan={1}>Department</th>
                  <th colSpan={1}>created at</th>
                  <th colSpan={1}>last connex</th>
                </tr>
              </thead>
              {newUsers?.map((user) => (
                <tbody className={styles.tbody} key={user.id}>
                  <tr>
                    <td className={styles.border}>
                      <div data-label="Username" className={styles.td}>
                        <Anchor to={`/users/${user.id}`}>
                          {user.username}
                        </Anchor>
                      </div>
                    </td>
                    <td className={styles.border} data-label="Email">
                      <span className={styles.td}>{user.email}</span>
                    </td>
                    <td className={styles.border}>
                      <span data-label="Department" className={styles.td}>
                        {user.department}
                      </span>
                    </td>
                    <td className={styles.border}>
                      <span data-label="Created at" className={styles.td}>
                        {convertDate(user.createdAt!)}
                      </span>
                    </td>
                    <td className={styles.border}>
                      <span data-label="Last connection" className={styles.td}>
                        {convertDate(user.lastConnection!)}
                      </span>
                    </td>
                    <td className={styles.tdCentered}>
                      <PopoverAdmin user={user} />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </section>
        )}

        <section className={styles.section}>
          <Heading as="h2" variant={{ fontSize: 'md' }}>
            All Users
          </Heading>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th colSpan={1}>Username</th>
                <th colSpan={1}>email</th>
                <th colSpan={1}>Department</th>
                <th colSpan={1}>created at</th>
                <th colSpan={1}>last connex</th>
              </tr>
            </thead>
            {notAdminUsers?.map((user) => (
              <tbody className={styles.tbody} key={user.id}>
                <tr>
                  <td className={styles.border}>
                    <div data-label="Username" className={styles.td}>
                      <Anchor to={`/users/${user.id}`}>{user.username}</Anchor>
                    </div>
                  </td>
                  <td className={styles.border}>
                    <div data-label="Email" className={styles.td}>
                      <p>{user.email}</p>
                    </div>
                  </td>
                  <td className={styles.border}>
                    <span data-label="Department" className={styles.td}>
                      {user.department}
                    </span>
                  </td>
                  <td className={styles.border}>
                    <span data-label="Created at" className={styles.td}>
                      {convertDate(user.createdAt!)}
                    </span>
                  </td>
                  <td className={styles.border}>
                    <span data-label="Last connection" className={styles.td}>
                      {convertDate(user.lastConnection!)}{' '}
                      {convertDateToTime(user.lastConnection!)}
                    </span>
                  </td>
                  <td className={styles.tdCentered}>
                    <PopoverAdmin user={user} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </section>

        <section className={styles.section}>
          <Heading as="h2" variant={{ fontSize: 'md' }}>
            All Posts
          </Heading>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th colSpan={1}>Title</th>
                <th colSpan={1}>Username</th>
                <th colSpan={1}>created at</th>
              </tr>
            </thead>
            {posts?.map((post) => (
              <tbody className={styles.tbody} key={post.id}>
                <tr>
                  <td className={styles.border}>
                    <div data-label="Title" className={styles.td}>
                      <Anchor to={`/posts/${post.id}`}>{post.title}</Anchor>
                    </div>
                  </td>
                  <td className={styles.border}>
                    <span data-label="Username" className={styles.td}>
                      {post.user.username}
                    </span>
                  </td>
                  <td className={styles.border}>
                    <span data-label="Created at" className={styles.td}>
                      {convertDate(post.createdAt!)}
                    </span>
                  </td>

                  <td className={styles.tdCentered}>
                    <PopoverPost
                      isAdminOrUser={isAdmin}
                      deletePost={() => handleDeletePost(post.id)}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </section>
      </div>
    </main>
  );
}
