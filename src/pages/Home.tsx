import { Anchor } from '../components/Anchor/Anchor';
import { Illustration } from '../components/Illustration/Illustration';
import { Layout } from '../components/Layout/Layout';
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
              gap: 'sp32',
              padding: { sm: 'sp32', md: 'sp48' },
            })}
          >
            <div>
              <h1
                className={utilities({
                  fontFamily: 'title',
                  color: 'appTextContrast',
                })}
              >
                Connect with your friends
              </h1>
            </div>

            <div>
              <p
                className={utilities({
                  fontFamily: 'text',
                  color: 'appTextContrast',
                })}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                minus doloremque explicabo natus, asperiores odio suscipit
                necessitatibus reprehenderit consequuntur sed unde architecto
                consequatur exercitationem iusto dolore incidunt alias ullam.
                Itaque!
              </p>
            </div>

            <div>
              <Anchor variant={{ content: 'text' }} href="/login">
                Login
              </Anchor>
            </div>
          </section>
          <div
            className={utilities({
              display: 'grid',
              placeItems: 'center',
              padding: { sm: 'sp32', md: 'sp48' },
            })}
          >
            <Illustration />
          </div>
        </Layout>
      </div>
    </main>
  );
}
