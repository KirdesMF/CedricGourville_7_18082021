import { Anchor } from '../../components/Anchor/Anchor';
import { FormLogIn } from '../../components/forms/FormLogin';
import { Guides } from '../../components/Guides/Guides';
import { Heading } from '../../components/Heading/Heading';
import { Illustration } from '../../components/Illustration/Illustration';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Span } from '../../components/Span/Span';
import * as styles from './login.css';

// handle error message
export function Login() {
  return (
    <main className={styles.main}>
      <Guides />
      <div className={styles.inner}>
        <section className={styles.section}>
          <Heading>
            Connect to your <Span variant={{ gradient: true }}>profile</Span>
          </Heading>

          <FormLogIn />

          <Paragraph variant={{ size: 'sm' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Paragraph>

          <Anchor variant={{ fontSize: 'xs' }} to="/register">
            Create your account
          </Anchor>
        </section>

        <Illustration />
      </div>
    </main>
  );
}
