import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Layout } from '../components/Layout/Layout';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { FormLogIn } from '../modules/FormLogin';
import { composition } from '../styles/composition.css';
import { utilities } from '../styles/utilities.css';

export function Login() {
  return (
    <main className={composition.panel({ size: 'big' })}>
      <div
        className={composition.wrapper({ height: 'full', width: 'content' })}
      >
        <Layout variant={{ home: true }}>
          <section
            className={utilities({
              display: 'grid',
              placeContent: 'center',
              gridAutoRows: 'min-content',
              gap: 'lg',
              padding: { sm: 'lg', md: 'xl' },
            })}
          >
            <Heading>
              Connect to your <span>profile</span>
            </Heading>

            <FormLogIn />

            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Paragraph>

            <div>
              <Anchor variant={{ fonts: 'medium' }} href="/register">
                New here ? Create your account
              </Anchor>
            </div>
          </section>

          <div
            className={utilities({
              display: { sm: 'none', md: 'grid' },
              placeItems: 'center',
              padding: { sm: 'lg', md: 'xl' },
            })}
          >
            <Illustration />
          </div>
        </Layout>
      </div>
    </main>
  );
}
