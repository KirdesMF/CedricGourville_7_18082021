import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { Illustration } from '../components/Illustration/Illustration';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Span } from '../components/Span/Span';
import { FormRegister } from '../modules/FormRegister';
import { container, panel } from '../styles/helpers.css';
import { flex } from '../styles/layouts.css';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

export function Register() {
  return (
    <main className={panel.md}>
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

          <FormRegister />

          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque!
          </Paragraph>

          <Anchor href="/login">Already an account ? Log here</Anchor>
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
