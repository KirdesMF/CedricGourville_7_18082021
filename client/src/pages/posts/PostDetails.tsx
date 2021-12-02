import { useParams } from 'react-router';
import { Post } from '@app/components/Post/Post';
import { usePostId } from '@app/api/post.api';
import { useCurrentUser } from '@app/api/user.api';
import * as styles from './posts.css';
import { Heading } from '@app/components/Heading/Heading';
import { Anchor } from '@app/components/Anchor/Anchor';
import { Icon } from '@app/components/Icon/Icon';
import { Helmet } from 'react-helmet-async';
import { Separator } from '@app/components/Separator/Separator';

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

          <Separator />
          {data && (
            <Post details post={data!} currentUser={current!} delay={1} />
          )}
        </div>
      </main>
    </>
  );
}
