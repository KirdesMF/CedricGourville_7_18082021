import { Anchor } from '../../components/Anchor/Anchor';
import { FormRegister } from '../../components/forms/FormRegister';
import { Guides } from '../../components/Guides/Guides';
import { Heading } from '../../components/Heading/Heading';
import { Illustration } from '../../components/Illustration/Illustration';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Span } from '../../components/Span/Span';
import * as styles from './register.css';

export function Register() {
  return (
    <main className={styles.main}>
      <Guides />
      <div className={styles.inner}>
        <section className={styles.section}>
          <Heading>
            Create a new user <Span variant={{ gradient: true }}>account</Span>
          </Heading>

          <FormRegister />

          <Paragraph variant={{ size: 'sm' }}>
            Already registered ?{' '}
            <Anchor
              variant={{ fontSize: 'inherit', color: 'primary' }}
              to="/login"
            >
              Log here
            </Anchor>
          </Paragraph>
        </section>

        <Illustration />
      </div>
    </main>
  );
}
