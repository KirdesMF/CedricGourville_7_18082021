import { useState } from 'react';
import { useParams } from 'react-router';
import {
  useCurrentUser,
  useLogOutUser,
  useUnregisterUser,
  useUserId,
} from '../../api/user.api';
import { Anchor } from '../../components/Anchor/Anchor';
import { Avatar } from '../../components/Avatar/Avatar';
import { Button } from '../../components/Button/Button';
import { FormProfile } from '../../components/forms/FormProfile';
import { Heading } from '../../components/Heading/Heading';
import { Icon } from '../../components/Icon/Icon';
import { Span } from '../../components/Span/Span';
import * as styles from './users.css';

const notProvided = '...';

export function UserProfile() {
  const { userId } = useParams();
  const { mutate: logout } = useLogOutUser();
  const { mutate: unregister } = useUnregisterUser();
  const { data: user } = useUserId(userId as string);
  const { data: currentUser } = useCurrentUser();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => setIsEditing((prev) => !prev);
  const handleLogout = () => currentUser && logout({ id: currentUser.id });
  const handleUnregister = () =>
    currentUser && unregister({ id: currentUser.id });

  const isCurrentUser = currentUser?.id === user?.id;

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <Heading variant={{ fontSize: 'lg', weight: 'bold' }}>
            User's profile{' '}
            <Span variant={{ size: 'lg', gradient: true }}>
              {user?.username}
            </Span>
          </Heading>
          <Anchor variant={{ color: 'primary' }} to="/posts">
            Posts
            <Icon name="ChevronRightIcon" />
          </Anchor>
        </div>

        {user && (
          <Avatar user={{ avatar: user.avatar, department: user.department }} />
        )}

        <section className={styles.section}>
          <Heading variant={{ fontSize: 'md', weight: 'thin' }} as="h2">
            Info
          </Heading>

          <div>
            <p>Username: {user?.username || notProvided}</p>
            <p>Firstname: {user?.firstName || notProvided}</p>
            <p>Lastname: {user?.lastName || notProvided}</p>
            <p>Bio: {user?.bio || notProvided}</p>
            <p>Department: {user?.department}</p>
          </div>
        </section>

        <section className={styles.section}>
          <Heading variant={{ fontSize: 'md', weight: 'thin' }} as="h2">
            Network
          </Heading>

          <div>
            <div>
              <Icon name="HeartIcon" />
              <ul>
                {user?.likes?.map((like) => (
                  <li key={like.id}>{like.postId}</li>
                ))}
              </ul>
            </div>
            <div>
              <Icon name="ArchiveIcon" />
              <ul>
                {user?.posts?.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </div>
            <p>
              <Icon name="ChatBubbleIcon" />
              {user?.comments?.length}
            </p>
          </div>
        </section>

        {isCurrentUser && (
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
        )}

        {isEditing && <FormProfile />}
      </div>
    </main>
  );
}
