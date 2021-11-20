import { useState } from 'react';
import { useParams } from 'react-router';
import {
  useLogOutUser,
  useUnregisterUser,
  useUserId,
} from '../../api/user.api';
import { Anchor } from '../../components/Anchor/Anchor';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { FormProfile } from '../../components/forms/FormProfile';
import { Heading } from '../../components/Heading/Heading';
import * as styles from './profil.css';

const notProvided = 'Not Provided';

export function Profil() {
  const { id } = useParams<{ id: string }>();
  const { mutate: logout } = useLogOutUser();
  const { mutate: unregister } = useUnregisterUser();
  const { data: user } = useUserId(id);
  const [isEditing, setIsEditing] = useState(false);

  console.table(user);

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

        <div>
          <p>Firstname: {user?.firstName || notProvided}</p>
          <p>Lastname: {user?.lastName || notProvided}</p>
          <p>Bio: {user?.bio || notProvided}</p>
          <p>Department: {user?.department}</p>
          <p>Likes: {user?.likes.length}</p>
          <p>Posts: {user?.posts.length}</p>
          <p>Comments: {user?.comments.length}</p>
        </div>

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
