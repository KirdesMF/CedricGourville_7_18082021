import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';

export function Page404() {
  return (
    <div>
      <Heading variant={{ fontSize: 'lg' }}>Page not found.</Heading>
      <Anchor to="/">Return</Anchor>
    </div>
  );
}
