import { Anchor } from '../../components/Anchor/Anchor';
import { Guides } from '../../components/Guides/Guides';
import { Heading } from '../../components/Heading/Heading';
import { Icon } from '../../components/Icon/Icon';
import { Illustration } from '../../components/Illustration/Illustration';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Span } from '../../components/Span/Span';
import { utilities } from '../../styles/utilities.css';
import * as styles from './home.css';

export function Home() {
  return (
    <main className={styles.main}>
      <Guides />
      <div className={styles.inner}>
        <section className={styles.section}>
          <Heading>
            Connect with your
            <Span variant={{ size: 'inherit', gradient: true }}>
              {' '}
              colleagues{' '}
            </Span>
          </Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            minus doloremque explicabo natus, asperiores odio suscipit
            necessitatibus reprehenderit consequuntur sed unde architecto
            consequatur exercitationem iusto dolore incidunt alias ullam.
            Itaque!
          </Paragraph>

          <nav className={styles.nav}>
            <Anchor
              variant={{
                color: 'primary',
                btn: 'primary',
                fontSize: 'sm',
                'space-between': true,
              }}
              to="/login"
            >
              <span>Login</span>
              <Icon name="ChevronRightIcon" />
            </Anchor>

            <Anchor
              variant={{
                color: 'base',
                btn: 'base',
                fontSize: 'sm',
                'space-between': true,
              }}
              to="/register"
            >
              <span>Register</span>
              <Icon name="ChevronRightIcon" />
            </Anchor>
          </nav>
        </section>

        <Illustration />
      </div>
    </main>
  );
}
