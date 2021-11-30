import { useParams } from 'react-router';
import { Post } from '../../components/Post/Post';
import { usePostId } from '../../api/post.api';
import { useCurrentUser } from '../../api/user.api';
import * as styles from './posts.css';
import { Heading } from '../../components/Heading/Heading';
import { Anchor } from '../../components/Anchor/Anchor';
import { Icon } from '../../components/Icon/Icon';
import { Helmet } from 'react-helmet-async';

export function PostDetails() {
  const { postId } = useParams();
  const { data } = usePostId(postId as string);
  const { data: current } = useCurrentUser();

  return (
    <>
      <Helmet>
        <title>Groupomania - Posts Details</title>
        <meta name="description" content="Posts" />
      </Helmet>

      <main className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.heading}>
            <Heading variant={{ fontSize: 'lg', weight: 'bold' }}>
              Details
            </Heading>
            <Anchor variant={{ color: 'primary' }} to="/posts">
              Posts
              <Icon name="ChevronRightIcon" />
            </Anchor>
          </div>
          {data && (
            <Post details post={data!} currentUser={current!} delay={1} />
          )}
        </div>
      </main>
    </>
  );
}
