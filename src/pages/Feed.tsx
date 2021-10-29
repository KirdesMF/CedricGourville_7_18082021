import { AnimatePresence } from 'framer-motion';
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

        <div className={utilities({ display: 'grid', gap: 'md' })}>
          <AnimatePresence>
            {posts?.map((p, idx) => (
              <Post
                key={p.id}
                title={p.title}
                content={p.content}
                media={p.media}
                delay={idx}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
