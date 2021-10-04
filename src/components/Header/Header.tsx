import { panel, wrapper } from '../../styles/utilities.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import * as styles from './header.css';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { cx } from '../../utils/classname.utils';

const links = [
  { name: 'home', href: '/' },
  { name: 'login', href: '/login' },
  { name: 'register', href: '/register' },
];

export function Nav() {
  return (
    <nav className={styles.nav}>
      {links.map((element) => (
        <Anchor
          key={element.href}
          href={element.href}
          variant={{ text: 'menu' }}
        >
          {element.name}
        </Anchor>
      ))}
    </nav>
  );
}

const variants: Variants = {
  initial: {
    x: '-100%',
  },
  open: {
    x: 0,
  },
  close: {
    x: '-100%',
  },
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
  };

  const handleMenu = (state: boolean) => setIsOpen(state);

  return (
    <>
      <header className={cx([styles.header, panel])}>
        <div className={cx([styles.inner, wrapper])}>
          <Anchor href="/" variant={{ text: true, gap: true }}>
            <Icon name="Groupomania" variant={{ size: 'medium' }} />
            <span>Groupomania</span>
          </Anchor>

          <div className={styles.buttons}>
            <Button onClick={() => handleMenu(true)}>
              <Icon name="HamburgerMenuIcon" variant={{ size: 'small' }} />
            </Button>

            <Button onClick={handleTheme}>
              <Icon name="SunIcon" variant={{ size: 'small' }} />
            </Button>
          </div>
        </div>
      </header>

      <motion.div
        variants={variants}
        animate={isOpen ? 'open' : 'close'}
        initial="initial"
        className={styles.menu}
      >
        <aside className={styles.aside}>
          <Button onClick={() => handleMenu(false)}>
            <Icon name="Cross2Icon" variant={{ size: 'small' }} />
          </Button>
          <Nav />
        </aside>
      </motion.div>
    </>
  );
}
