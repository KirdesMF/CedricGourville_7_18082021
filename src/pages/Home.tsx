import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { utilities } from '../styles/utilities.css';

export function Home() {
  return (
    <main
      className={utilities({
        flex: 1,
        paddingInline: 'lg',
        paddingBlock: 'lg',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 'lg',
        marginInline: 'auto',
      })}
    >
      <section className={utilities({ display: 'grid', gap: 'md' })}>
        <Heading>
          Connect
          <Span variant={{ size: 'inherit', color: 'primary' }}> with </Span>
          your colleagues
        </Heading>

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minus
          doloremque explicabo natus, asperiores odio suscipit necessitatibus
          reprehenderit consequuntur sed unde architecto consequatur
          exercitationem iusto dolore incidunt alias ullam. Itaque!
        </Paragraph>

        <nav
          className={utilities({
            display: 'flex',
            gap: 'md',
          })}
        >
          <Anchor variant={{ size: 'lg', color: 'base' }} to="/login">
            <span>Login</span>
          </Anchor>

          <Anchor variant={{ size: 'lg', color: 'base' }} to="/register">
            <span>Register</span>
          </Anchor>
        </nav>
      </section>

      <div
        className={utilities({
          display: { sm: 'none', md: 'grid' },
          placeItems: 'center',
        })}
      >
        <Illustration />
      </div>
    </main>
  );
}
