import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Icon } from '../components/Icon';
import { Paragraph } from '../components/Paragraph';
import { Span } from '../components/Span';

export function Home() {
  return (
    <Grid as="main" css={{ gridTemplateRows: '0.75fr 1fr' }}>
      <Box as="section" css={{ background: '$blue8' }}>
        <Container
          css={{
            paddingInline: '$medium',
            paddingBlock: '$large',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$small',
          }}
        >
          <Icon
            name="GroupomaniaIcon"
            variant={{ size: 'large', color: 'white' }}
          />
          <Span
            css={{ textAlign: 'center', fontSize: '$5', fontFamily: '$title' }}
          >
            Groupomania
          </Span>
        </Container>
      </Box>

      <Box as="section">
        <Container
          css={{
            paddingInline: '$medium',
            paddingBlock: '$large',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '$medium',
          }}
        >
          <Heading size="large">
            Connect <Span color="primary">with</Span> your colleagues
          </Heading>
          <Paragraph css={{ textAlign: 'center' }}>
            Probarent miraretur nostro audiebamus cum quidem miraretur mihi
            audivi mentitum tu quid eos notae nos audivi nihil quorum probarent
            quid.
          </Paragraph>
          <Button>Login</Button>
        </Container>
      </Box>
    </Grid>
  );
}
