import { AnimatePresence, motion } from 'framer-motion';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Separator } from '../../components/Separator/Separator';
import { usePosts } from '../../api/post.api';
import { useCurrentUser } from '../../api/user.api';
import { FormPost } from '../../components/forms/FormPost';
import { Heading } from '../../components/Heading/Heading';
import { Post } from '../../components/Post/Post';
import { Span } from '../../components/Span/Span';
import * as styles from './posts.css';

export function AllPosts() {
  const { data: currentUser } = useCurrentUser();
  const { data: posts, isLoading } = usePosts();

  isLoading && <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>Groupomania - Posts</title>
        <meta name="description" content="Posts" />
      </Helmet>

      <main className={styles.main}>
        <div className={styles.inner}>
          <Heading variant={{ fontSize: 'lg', weight: 'bold' }}>
            Welcome{' '}
            <Span variant={{ gradient: true }}> {currentUser?.username}</Span>
          </Heading>

          <FormPost />

          <Separator />

          <AnimatePresence>
            <motion.div className={styles.feed}>
              {posts?.map((post, idx) => {
                return (
                  <Fragment key={post.id}>
                    <Post delay={idx} post={post} currentUser={currentUser!} />
                    <hr className={styles.hr} />
                  </Fragment>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
