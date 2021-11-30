import { useParams } from 'react-router';
import { Post } from '../../components/Post/Post';
import { usePostId } from '../../api/post.api';
import { useCurrentUser } from '../../api/user.api';
import * as styles from './posts.css';

export function PostDetails() {
  const { postId } = useParams();
  const { data } = usePostId(postId as string);
  const { data: current } = useCurrentUser();
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        {data && <Post details post={data!} currentUser={current!} delay={1} />}
      </div>
    </main>
  );
}
