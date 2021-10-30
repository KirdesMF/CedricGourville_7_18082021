import * as styles from './header.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Menu } from '../Menu/Menu';
import { Span } from '../Span/Span';
import { useUser } from '../../api/user.api';
import { User } from 'p7_types';
import { Avatar } from '../Avatar/Avatar';

const AnchorAvatar = ({ user }: { user: User | undefined }) => {
  if (!user) {
    return (
      <Anchor to="/login">
        <Icon name="PersonIcon" variant={{ size: 'medium' }} />
      </Anchor>
    );
  }
  return (
    <Anchor to="/profil">
      <Avatar src={user.avatar as string} alt="avatar" />
    </Anchor>
  );
};

// TODO
// handle user logged in case
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useTheme();
  const { data: user } = useUser();

  const handleTheme = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const handleMenu = (state: boolean) => setIsOpen(state);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <AnchorAvatar user={user} />

          <Anchor to={user ? '/feed' : '/'} variant={{ gap: true }}>
            <Icon name="Groupomania" variant={{ size: 'medium' }} />
            <Span>Groupomania</Span>
          </Anchor>

          <aside className={styles.aside}>
            <Button onClick={() => handleMenu(true)}>
              <Icon name="HamburgerMenuIcon" variant={{ size: 'small' }} />
            </Button>

            <Button onClick={handleTheme}>
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
