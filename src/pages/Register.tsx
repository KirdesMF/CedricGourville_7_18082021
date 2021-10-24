import { Redirect } from 'react-router';
import { Anchor } from '../components/Anchor/Anchor';
import { FormRegister } from '../components/forms/FormRegister';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { useAuth } from '../context/auth.context';
import { container, panel } from '../styles/helpers.css';
import { flex } from '../styles/layouts.css';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

export function Register() {
  const { user } = useAuth();

  if (user) return <Redirect to="/feed" />;

  return (
    <main className={panel['2xl']}>
      <div
        className={cx([
          container({ width: 'lg', padding: 'lg' }),
          flex({ template: 'base' }),
        ])}
      >
        <section className={utilities({ display: 'grid' })}>
          <Heading>
            Create a new user{' '}
            <Span variant={{ color: 'secondary' }}>account</Span>
          </Heading>

          <Paragraph variant={{ size: 'xs' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque!
          </Paragraph>

          <FormRegister />

          <Anchor to="/login">Already an account ? Log here</Anchor>
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
