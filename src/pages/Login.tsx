import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { FormLogIn } from '../modules/FormLogin';
import { container, panel } from '../styles/helpers.css';
import { flex } from '../styles/layouts.css';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

export function Login() {
  return (
    <main className={panel.lg}>
      <div
        className={cx([
          container({ width: 'lg', padding: 'lg' }),
          flex({ template: 'base' }),
        ])}
      >
        <section className={utilities({ display: 'grid' })}>
          <Heading>
            Connect to your{' '}
            <Span variant={{ color: 'secondary' }}>profile</Span>
          </Heading>

          <FormLogIn />

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Paragraph>

          <Anchor to="/register">Create your account</Anchor>
        </section>

        <div
          className={utilities({
            display: { sm: 'none', md: 'grid' },
            placeItems: 'center',
          })}
        >
          <Illustration />
        </div>
      </div>
    </main>
  );
}
