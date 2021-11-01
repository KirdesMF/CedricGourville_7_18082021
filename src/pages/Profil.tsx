import { useState } from 'react';
import { useLogOutUser, useUnregisterUser, useUser } from '../api/user.api';
import { Anchor } from '../components/Anchor/Anchor';
import { Avatar } from '../components/Avatar/Avatar';
import { Button } from '../components/Button/Button';
import { FormProfile } from '../components/forms/FormProfile';
import { Heading } from '../components/Heading/Heading';
import { container, panel } from '../styles/helpers.css';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

const notProvided = '❌ Not Provided';
export function Profil() {
  const { mutate: logout } = useLogOutUser();
  const { mutate: unregister } = useUnregisterUser();
  const { data: user } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => setIsEditing((prev) => !prev);
  const handleLogout = () => logout();
  const handleUnregister = () => user && unregister({ id: user?.id });

  return (
    <main className={panel['2xl']}>
      <div
        className={cx([
          container({ width: 'lg', padding: '2xl' }),
          utilities({ display: 'grid', gap: 'md' }),
        ])}
      >
        <Heading>Profile</Heading>
        <Anchor to="/feed">Feed</Anchor>

        {user?.avatar && <Avatar src={user.avatar} alt="avatar" />}

        <ul>
          <li>Firstname: {user?.firstName || notProvided}</li>
          <li>Lastname: {user?.lastName || notProvided}</li>
          <li>Bio: {user?.bio || notProvided}</li>
          <li>Email: {user?.email || notProvided}</li>
        </ul>

        <div className={utilities({ display: 'flex', gap: 'md' })}>
          <Button onClick={handleEditing}>Edit profile</Button>
          <Button onClick={handleLogout}>Log out</Button>
          <Button onClick={handleUnregister}>Unregister</Button>
        </div>

        {isEditing && <FormProfile />}
      </div>
    </main>
  );
}
