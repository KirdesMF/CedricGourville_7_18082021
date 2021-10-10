import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Layout } from '../components/Layout/Layout';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { FormRegister } from '../modules/FormRegister';
import { composition } from '../styles/composition.css';
import { utilities } from '../styles/utilities.css';

export function Register() {
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
              gap: 'xl',
              padding: { sm: 'xl', md: '2xl' },
            })}
          >
            <Heading>
              Create a new <span>user account</span>
            </Heading>

            <FormRegister />

            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque!
            </Paragraph>

            <div>
              <Anchor variant={{ fonts: 'medium' }} href="/login">
                Already an account ? Log here
              </Anchor>
            </div>
          </section>
          <div
            className={utilities({
              display: { sm: 'none', md: 'grid' },
              placeItems: 'center',
              padding: { sm: 'xl', md: '2xl' },
            })}
          >
            <Illustration />
          </div>
        </Layout>
      </div>
    </main>
  );
}
