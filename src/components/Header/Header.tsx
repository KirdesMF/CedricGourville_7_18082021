import * as styles from './header.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Menu } from '../Menu/Menu';
import { Span } from '../Span/Span';
import { useCurrentUser } from '../../api/user.api';
import { User } from 'p7_types';
import { Avatar } from '../Avatar/Avatar';

const AnchorAvatar = ({
  user,
}: {
  user: Pick<User, 'id' | 'avatar' | 'department'> | undefined;
}) => {
  if (!user) {
    return (
      <Anchor variant={{ color: 'base' }} to="/login">
        <Icon name="PersonIcon" variant={{ size: 'medium' }} />
      </Anchor>
    );
  }
  return (
    <Anchor to={`/profil/${user.id}`}>
      <Avatar user={{ avatar: user.avatar, department: user.department }} />
    </Anchor>
  );
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useTheme();
  const { data: user } = useCurrentUser();

  const handleTheme = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const handleMenu = (state: boolean) => setIsOpen(state);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <AnchorAvatar user={user} />

          <Anchor
            to={user ? '/feed' : '/'}
            variant={{
              space: 'gap',
              color: 'base',
            }}
          >
            <Icon name="Groupomania" variant={{ size: 'medium' }} />
            <Span variant={{ size: 'sm', weight: 'thin' }}>Groupomania</Span>
          </Anchor>

          <aside className={styles.aside}>
            <Button
              variant={{ discret: true }}
              onClick={() => handleMenu(true)}
            >
              <Icon name="HamburgerMenuIcon" variant={{ size: 'small' }} />
            </Button>

            <Button variant={{ discret: true }} onClick={handleTheme}>
              <Icon name="SunIcon" variant={{ size: 'small' }} />
            </Button>
          </aside>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && <Menu handleMenu={handleMenu} />}
      </AnimatePresence>
    </>
  );
}
