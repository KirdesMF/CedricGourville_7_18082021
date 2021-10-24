import { useLogOutUser, useUser } from '../api/user.api';
import { Anchor } from '../components/Anchor/Anchor';
import { Button } from '../components/Button/Button';
import { Heading } from '../components/Heading/Heading';
import { container, panel } from '../styles/helpers.css';
import { utilities } from '../styles/utilities.css';

export function Profil() {
  const { mutate } = useLogOutUser();
  const { data: user } = useUser();
  return (
    <main className={panel['2xl']}>
      <div className={container({ width: 'lg', padding: '2xl' })}>
        <Heading>Profil</Heading>
        <ul>
          <li>{user?.firstName || 'Not provided'}</li>
          <li>{user?.lastName || 'Not provided'}</li>
          <li>{user?.bio || 'Not provided'}</li>
          <li>{user?.email || 'Not provided'}</li>
        </ul>

        <div className={utilities({ display: 'flex', gap: 'md' })}>
          <Button onClick={() => mutate()}>Log out</Button>
          <Anchor to="/feed">Feed</Anchor>
        </div>
      </div>
    </main>
  );
}
