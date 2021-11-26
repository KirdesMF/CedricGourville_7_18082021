import { AnimatePresence, motion } from 'framer-motion';
import { usePosts } from '../../api/post.api';
import { useCurrentUser } from '../../api/user.api';
import { FormPost } from '../../components/forms/FormPost';
import { Heading } from '../../components/Heading/Heading';
import { Post } from '../../components/Post/Post';
import { Span } from '../../components/Span/Span';
import * as styles from './posts.css';

export function Posts() {
  const { data: currentUser } = useCurrentUser();
  const { data: posts } = usePosts();

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <Heading variant={{ fontSize: 'lg', weight: 'bold' }}>
          Welcome{' '}
          <Span variant={{ gradient: true }}> {currentUser?.username}</Span>
        </Heading>

        <FormPost />

        <AnimatePresence>
          <motion.div className={styles.feed}>
            {posts?.map((post, idx) => (
              <Post
                key={post.id}
                delay={idx}
                post={post}
                currentUser={currentUser!}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
