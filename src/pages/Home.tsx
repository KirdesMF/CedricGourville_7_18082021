import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Layout } from '../components/Layout/Layout';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { composition } from '../styles/composition.css';
import { utilities } from '../styles/utilities.css';

export function Home() {
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
              gap: 'md',
              padding: { sm: 'lg', md: 'xl' },
            })}
          >
            <Heading>
              Connect <span>with</span> your colleagues
            </Heading>

            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              minus doloremque explicabo natus, asperiores odio suscipit
              necessitatibus reprehenderit consequuntur sed unde architecto
              consequatur exercitationem iusto dolore incidunt alias ullam.
              Itaque!
            </Paragraph>

            <div className={utilities({ display: 'flex', gap: 'lg' })}>
              <Anchor variant={{ fonts: 'medium' }} href="/login">
                Login
              </Anchor>

              <Anchor variant={{ fonts: 'medium' }} href="/register">
                Register
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
