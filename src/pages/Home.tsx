import { Layout } from '../components/Layout/Layout';
import { composition } from '../styles/composition.css';
import { utilities } from '../styles/utilities.css';

export function Home() {
  return (
    <main className={composition.panel({ size: 'big' })}>
      <div className={composition.wrapper({ height: 'full' })}>
        <Layout variant={{ home: true }}>
          <section
            className={utilities({ display: 'flex', background: 'warning' })}
          ></section>
          <div
            className={utilities({
              display: 'flex',
              background: 'accentBgHover',
            })}
          ></div>
        </Layout>
      </div>
    </main>
  );
}
