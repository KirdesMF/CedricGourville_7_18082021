import { ExternalAnchor } from '../Anchor/Anchor';
import { Icon } from '../Icon/Icon';
import * as styles from './footer.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ExternalAnchor
          variant={{ size: 'md' }}
          href="https://github.com/KirdesMF/cedricgourville_7_18082021_frontend"
        >
          <Icon name="GitHubLogoIcon" />
        </ExternalAnchor>
        <small className={styles.small}>Cedric Gourville &copy;2021</small>
      </div>
    </footer>
  );
}
