import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';
import { container } from '../styles/helpers.css';

export function Page404() {
  return (
    <div className={container({ width: 'lg', padding: 'lg' })}>
      <Heading>Page not found.</Heading>
      <Anchor to="/">Return</Anchor>
    </div>
  );
}
