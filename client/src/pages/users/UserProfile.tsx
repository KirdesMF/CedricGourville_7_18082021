import { useState } from 'react';
import { useParams } from 'react-router';
import { Separator } from '../../components/Separator/Separator';
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

  console.log(user);

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <Heading variant={{ fontSize: 'xl', weight: 'bold' }}>
            <Span variant={{ size: 'lg', gradient: true }}>
              {user?.username}
            </Span>
          </Heading>
          <Anchor variant={{ color: 'primary' }} to="/posts">
            Posts
            <Icon name="ChevronRightIcon" />
          </Anchor>
        </div>

        {isCurrentUser && (
          <section className={styles.buttons}>
            <Button variant={{ primary: true }} onClick={handleEditing}>
              Edit profile
            </Button>
            <Button variant={{ primary: true }} onClick={handleLogout}>
              Log out
            </Button>
            <Button variant={{ primary: true }} onClick={handleUnregister}>
              Unregister
            </Button>
          </section>
        )}

        {isEditing && <FormProfile setIsEditing={setIsEditing} />}

        <hr className={styles.hr} />

        <section className={styles.articles}>
          <Heading as="h3" variant={{ hidden: true }}>
            Info
          </Heading>
          {user && (
            <article className={styles.article}>
              <span className={styles.avatar}>
                <Avatar
                  variant={{ size: 'large' }}
                  user={{ avatar: user.avatar, department: user.department }}
                />
                {user?.username}
              </span>
            </article>
          )}

          <article className={styles.article}>
            <div className={styles.list}>
              <p className={styles.item}>
                firstname : {user?.firstName || notProvided}
              </p>
              <Separator />
              <p className={styles.item}>
                lastname : {user?.lastName || notProvided}
              </p>
              <Separator />
              <p className={styles.item}>bio : {user?.bio || notProvided}</p>
              <Separator />
              <p className={styles.item}>department : {user?.department}</p>
            </div>
          </article>
        </section>

        <hr className={styles.hr} />

        <section className={styles.articles}>
          <Heading as="h3" variant={{ hidden: true }}>
            Network
          </Heading>

          <article className={styles.article}>
            <span>
              <Icon name="HeartIcon" variant={{ size: 'large' }} />
              {user?.likes?.length}
            </span>
          </article>

          <article className={styles.article}>
            <span>
              <Icon name="ArchiveIcon" variant={{ size: 'large' }} />
              {user?.posts?.length}
            </span>
          </article>

          <article className={styles.article}>
            <span>
              <Icon name="ChatBubbleIcon" variant={{ size: 'large' }} />
              {user?.comments?.length}
            </span>
          </article>

          <article className={styles.article}>
            <span>
              <Icon name="Groupomania" variant={{ size: 'large' }} />
            </span>
          </article>
        </section>
      </div>
    </main>
  );
}
