import { Anchor } from '../../components/Anchor/Anchor';
import { Heading } from '../../components/Heading/Heading';
import { Illustration } from '../../components/Illustration/Illustration';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Span } from '../../components/Span/Span';
import * as styles from './home.css';

export function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <section className={styles.section}>
          <Heading>
            Connect
            <Span variant={{ size: 'inherit', color: 'primary' }}> with </Span>
            your colleagues
          </Heading>

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            minus doloremque explicabo natus, asperiores odio suscipit
            necessitatibus reprehenderit consequuntur sed unde architecto
            consequatur exercitationem iusto dolore incidunt alias ullam.
            Itaque!
          </Paragraph>

          <nav className={styles.nav}>
            <Anchor variant={{ color: 'base', btn: true }} to="/login">
              <span>Login</span>
            </Anchor>

            <Anchor variant={{ color: 'base', btn: true }} to="/register">
              <span>Register</span>
            </Anchor>
          </nav>
        </section>

        <div className={styles.illustration}>
          <Illustration />
        </div>
      </div>
    </main>
  );
}
