import { AnimatePresence, motion } from 'framer-motion';
import { usePosts } from '../api/post.api';
import { useUser } from '../api/user.api';
import { Anchor } from '../components/Anchor/Anchor';
import { FormPost } from '../components/forms/FormPost';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Post } from '../components/Post/Post';
import { Span } from '../components/Span/Span';
import { container, panel } from '../styles/helpers.css';
import { utilities } from '../styles/utilities.css';

export function Feed() {
  const { data: user } = useUser();
  const { data: posts } = usePosts();

  return (
    <main className={panel['2xl']}>
      <div className={container({ width: 'lg', padding: '2xl' })}>
        <Heading>Feed page</Heading>

        <Anchor to="/profil">Profil</Anchor>
        <Paragraph>
          Welcome{' '}
          <Span variant={{ color: 'secondary' }}> {user?.username}</Span>
        </Paragraph>

        <FormPost />

        <AnimatePresence>
          <motion.div
            layout
            className={utilities({
              display: 'grid',
              gap: 'lg',
              paddingBlock: 'lg',
            })}
          >
            {posts?.map((post, idx) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                media={post.media}
                user={post.user}
                comments={post.comments}
                delay={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
