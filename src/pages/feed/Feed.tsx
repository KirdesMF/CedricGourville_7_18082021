import { AnimatePresence, motion } from 'framer-motion';
import { Role } from 'p7_types';
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
          <motion.div className={styles.feed}>
            {posts?.map((post, idx) => (
              <Post
                key={post.id}
                delay={idx}
                post={post}
                currentUser={{
                  id: user?.id as string,
                  role: user?.role as Role,
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
