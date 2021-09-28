import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Grid } from '../components/Grid';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
import { Span } from '../components/Span';

export function Home() {
  return (
    <Box as="main" css={{ paddingBlock: '$large', paddingInline: '$medium' }}>
      <Grid as="section" gap="small">
        <Heading size="large">
          Connect <Span color="primary">with</Span> your colleagues
        </Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consect</Paragraph>
      </Grid>

      <Grid as="section" gap="small">
        <Heading size="large">
          Connect <Span color="primary">with</Span> your colleagues
        </Heading>
        <Paragraph>Lorem ipsum dolor sit amet, consect</Paragraph>
      </Grid>
    </Box>
  );
}
