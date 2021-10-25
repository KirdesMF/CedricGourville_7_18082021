import { useUser } from '../api/user.api';
import { Anchor } from '../components/Anchor/Anchor';
import { FormLogIn } from '../components/forms/FormLogin';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { container, panel } from '../styles/helpers.css';
import { flex } from '../styles/layouts.css';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

export function Login() {
  const { error } = useUser();

  return (
    <main className={panel.lg}>
      <div
        className={cx([
          container({ width: 'lg', padding: 'lg' }),
          flex({ template: 'base' }),
        ])}
      >
        <section className={utilities({ display: 'grid' })}>
          {error && <p>{error.message}</p>}

          <Heading>
            Connect to your{' '}
            <Span variant={{ color: 'secondary' }}>profile</Span>
          </Heading>

          <FormLogIn />

          <Paragraph variant={{ size: 'xs' }}>
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
