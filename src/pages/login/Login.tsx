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
            Do you already have an account ?{' '}
            <Anchor
              variant={{ fontSize: 'xs', color: 'primary' }}
              to="/register"
            >
              Create your account
            </Anchor>
          </Paragraph>
        </section>

        <Illustration />
      </div>
    </main>
  );
}
