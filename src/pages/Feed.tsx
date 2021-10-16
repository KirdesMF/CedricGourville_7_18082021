import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { useAuth } from '../context/auth.context';
import { container, panel } from '../styles/helpers.css';

export function Feed() {
  const { user } = useAuth();
  return (
    <main className={panel['2xl']}>
      <div className={container({ width: 'lg', padding: '2xl' })}>
        <Heading>Feed page</Heading>
        <Paragraph>
          Welcome{' '}
          <Span variant={{ color: 'secondary' }}> {user?.userName}</Span>
        </Paragraph>
        <Anchor to="/profil">Profil</Anchor>
      </div>
    </main>
  );
}
