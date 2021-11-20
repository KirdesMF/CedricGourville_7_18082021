import { useState } from 'react';
import { useLogOutUser, useUnregisterUser, useUser } from '../../api/user.api';
import { Anchor } from '../../components/Anchor/Anchor';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { FormProfile } from '../../components/forms/FormProfile';
import { Heading } from '../../components/Heading/Heading';
import * as styles from './profil.css';

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
    <main className={styles.main}>
      <div className={styles.inner}>
        <Heading variant={{ fontSize: 'xl', weight: 'bold' }}>Profile</Heading>

        <Anchor variant={{ color: 'primary' }} to="/feed">
          Feed
        </Anchor>

        {user && (
          <Avatar user={{ avatar: user.avatar, department: user.department }} />
        )}

        <ul>
          <li>Firstname: {user?.firstName || notProvided}</li>
          <li>Lastname: {user?.lastName || notProvided}</li>
          <li>Bio: {user?.bio || notProvided}</li>
          <li>Email: {user?.email || notProvided}</li>
        </ul>

        <div className={styles.buttons}>
          <Button variant={{ primary: true }} onClick={handleEditing}>
            Edit profile
          </Button>
          <Button variant={{ primary: true }} onClick={handleLogout}>
            Log out
          </Button>
          <Button variant={{ primary: true }} onClick={handleUnregister}>
            Unregister
          </Button>
        </div>

        {isEditing && <FormProfile />}
      </div>
    </main>
  );
}
