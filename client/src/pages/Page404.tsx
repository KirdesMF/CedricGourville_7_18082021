import { Icon } from '@app/components/Icon/Icon';
import { utilities } from '@app/styles/utilities.css';
import { Anchor } from '../components/Anchor/Anchor';
import { Heading } from '../components/Heading/Heading';

export function Page404() {
  return (
    <main
      className={utilities({
        position: 'relative',
        display: 'flex',
        paddingBlock: 'lg',
        paddingInline: 'lg',
      })}
    >
      <div
        className={utilities({
          display: 'grid',
          alignItems: 'center',
          width: 'lg',
          marginInline: 'auto',
        })}
      >
        <Heading variant={{ fontSize: 'lg' }}>Page not found.</Heading>
        <Anchor to="/posts">
          <Icon name="ChevronLeftIcon" />
          Return
        </Anchor>
      </div>
    </main>
  );
}
