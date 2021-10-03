import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import * as styles from './header.css';
export function Header() {
  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
  };
  return (
    <header className={styles.header}>
      <Anchor href="/" variant={{ text: true }}>
        Groupomania
      </Anchor>

      <Anchor href="/profil" variant={{ icon: true }}>
        <Icon name="PersonIcon" variant={{ size: 'medium' }} />
      </Anchor>

      <Button onClick={toggleTheme}>
        <Icon name="SunIcon" variant={{ size: 'medium' }} />
      </Button>

      <Button>
        <Icon name="HamburgerMenuIcon" variant={{ size: 'small' }} />
      </Button>
    </header>
  );
}
