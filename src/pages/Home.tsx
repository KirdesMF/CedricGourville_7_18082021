import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { container, panel } from '../styles/helpers.css';
import { flex } from '../styles/layouts.css';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

export function Home() {
  return (
    <main className={panel['2xl']}>
      <div
        className={cx([
          container({ width: 'lg', padding: '2xl' }),
          flex({ template: 'base' }),
        ])}
      >
        <section
          className={utilities({
            display: 'grid',
            gridAutoRows: 'min-content',
          })}
        >
          <Heading>
            Connect{' '}
            <Span variant={{ size: 'inherit', color: 'primary' }}>with</Span>{' '}
            your colleagues
          </Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            minus doloremque explicabo natus, asperiores odio suscipit
            necessitatibus reprehenderit consequuntur sed unde architecto
            consequatur exercitationem iusto dolore incidunt alias ullam.
            Itaque!
          </Paragraph>

          <div
            className={utilities({
              display: 'flex',
              gap: 'md',
            })}
          >
            <Anchor variant={{ size: 'lg', color: 'base' }} href="/login">
              <span>Login</span>
            </Anchor>

            <Anchor variant={{ size: 'lg', color: 'base' }} href="/register">
              <span>Register</span>
            </Anchor>
          </div>
        </section>

        <div
          className={utilities({
            display: { sm: 'none', md: 'grid' },
            placeItems: 'center',
          })}
        >
          <Illustration />
        </div>
      </div>
    </main>
  );
}
