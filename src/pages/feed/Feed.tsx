import { AnimatePresence, motion } from 'framer-motion';
import { Department, Role } from 'p7_types';
import { usePosts } from '../../api/post.api';
import { useUser } from '../../api/user.api';
import { FormPost } from '../../components/forms/FormPost';
import { Heading } from '../../components/Heading/Heading';
import { Post } from '../../components/Post/Post';
import * as styles from './feed.css';

export function Feed() {
  const { data: user } = useUser();
  const { data: posts } = usePosts();

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <Heading variant={{ fontSize: 'xl', weight: 'bold' }}>Feed</Heading>

        <FormPost />

        <AnimatePresence>
          <motion.div layout className={styles.feed}>
            {posts?.map((post, idx) => (
              <Post
                key={post.id}
                delay={idx}
                id={post.id}
                title={post.title}
                content={post.content}
                media={post.media}
                createdAt={post.createdAt}
                comments={post.comments}
                userId={user?.id as string}
                user={{
                  id: post?.user.id,
                  role: user?.role as Role,
                  username: post?.user.username,
                  avatar: post?.user.avatar,
                  department: user?.department as Department,
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
