import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Groupomania - Register</title>
        <meta name="description" content="Groupomania - Register" />
      </Helmet>

      <main className={styles.main}>
        <Guides />
        <div className={styles.inner}>
          <section className={styles.section}>
            <Heading variant={{ fontSize: 'xl', weight: 'bold' }}>
              Create a new user{' '}
              <Span variant={{ gradient: true }}>account</Span>
            </Heading>

            <FormRegister />

            <Paragraph variant={{ size: 'sm' }}>
              Already registered ?{' '}
              <Anchor variant={{ color: 'primary' }} to="/login">
                <Span variant={{ size: 'inherit' }}>Log here</Span>
              </Anchor>
            </Paragraph>
          </section>

          <Illustration />
        </div>
      </main>
    </>
  );
}
