import { usePosts } from '../api/post.api';
import { useUser } from '../api/user.api';
import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { container, panel } from '../styles/helpers.css';

export function Feed() {
  const { data: user } = useUser();
  const { data: posts } = usePosts();

  return (
    <main className={panel['2xl']}>
      <div className={container({ width: 'lg', padding: '2xl' })}>
        <Heading>Feed page</Heading>
        <Paragraph>
          Welcome{' '}
          <Span variant={{ color: 'secondary' }}> {user?.username}</Span>
          <div>
            {posts?.map((p) => (
              <h2>{p.title}</h2>
            ))}
          </div>
        </Paragraph>
        <Anchor to="/profil">Profil</Anchor>
      </div>
    </main>
  );
}
