import { Link } from 'react-router-dom';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Icon } from '../components/Icon';
import { RouterLink } from '../components/RouterLink';
import { useAuth } from '../context/auth.context';

export function Header() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Box
        as="header"
        css={{
          paddingBlock: '$medium',
          backgroundColor: '$blue1',
        }}
      >
        <Container
          css={{
            paddingInline: '$medium',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <RouterLink to="/">
            <Icon name="GroupomaniaIcon" />
          </RouterLink>
          <Flex as="nav" css={{ gap: '$small' }}>
            <RouterLink to="/login">
              <Icon name="PersonIcon" />
            </RouterLink>
            <Button>
              <Icon name="HamburgerMenuIcon" />
            </Button>
          </Flex>
        </Container>
      </Box>
    );
  }

  return (
    <header>
      <div>
        <p>Welcome {user.firstName}</p>
        <Link to="/profil">Profil</Link>
        <Link to="/">Feed</Link>
        <Button onClick={() => logout(user.id)}>Log out</Button>
      </div>
    </header>
  );
}
