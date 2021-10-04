import * as styles from './header.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { makeBreakpoint } from '../../utils/breakpoints.utils';
import { cx } from '../../utils/classname.utils';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useTheme } from '../../hooks/useTheme';
import { textAnchor } from '../Anchor/anchor.css';
import { composition } from '../../styles/composition.css';

const links = [
  { name: 'home', href: '/' },
  { name: 'login', href: '/login' },
  { name: 'register', href: '/register' },
];

const variants: Variants = {
  open: {
    x: 0,
    y: 0,
  },
  close: (isDesktop: boolean) => ({
    x: isDesktop ? '-100%' : 0,
    y: isDesktop ? 0 : '-100%',
  }),
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMatchMedia(makeBreakpoint('md'));
  const [mode, setMode] = useTheme();

  const handleTheme = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const handleMenu = (state: boolean) => setIsOpen(state);

  return (
    <>
      <header className={cx([styles.header, composition.panel])}>
        <div className={cx([styles.inner, composition.wrapper])}>
          <div className={styles.items({ item: 'first' })}>
            <Anchor href="/login" variant={{ content: 'icon' }}>
              <Icon name="PersonIcon" variant={{ size: 'medium' }} />
            </Anchor>
          </div>

          <div className={styles.items()}>
            <Anchor
              href="/"
              variant={{ content: 'text', gap: true, fonts: 'normal' }}
            >
              <Icon name="Groupomania" variant={{ size: 'medium' }} />
              <span className={textAnchor}>Groupomania</span>
            </Anchor>
          </div>

          <div className={styles.items({ item: 'last', gap: true })}>
            <Button onClick={() => handleMenu(true)}>
              <Icon name="HamburgerMenuIcon" variant={{ size: 'small' }} />
            </Button>

            <Button onClick={handleTheme}>
              <Icon name="SunIcon" variant={{ size: 'small' }} />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            animate="open"
            exit="close"
            initial="close"
            className={styles.menu}
            custom={isDesktop}
          >
            <aside className={styles.aside}>
              <Button onClick={() => handleMenu(false)}>
                <Icon name="Cross2Icon" variant={{ size: 'small' }} />
              </Button>

              <nav className={styles.nav}>
                {links.map((element) => (
                  <Anchor
                    navLink
                    key={element.href}
                    href={element.href}
                    variant={{ content: 'text', fonts: 'big' }}
                    onClick={() => handleMenu(false)}
                  >
                    {element.name}
                  </Anchor>
                ))}
              </nav>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
