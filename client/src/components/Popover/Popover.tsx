import { Root, Trigger, Content } from '@radix-ui/react-popover';
import { Button } from '../Button/Button';
import { Dialog } from '../Dialog/Dialog';
import { Icon } from '../Icon/Icon';
import * as styles from './popover.css';

export function Popover() {
  return (
    <Root>
      <Trigger asChild>
        <span>
          <Icon name="DotsVerticalIcon" />
        </span>
      </Trigger>

      <Content asChild>
        <ul className={styles.list}>
          <Dialog description="Are you sure to report this post ?">
            <li className={styles.item}>
              <Button variant={{ ghost: true }}>
                <Icon name="FlagIcon" />
                Report
              </Button>
            </li>
          </Dialog>
          <Dialog description="Are you sure to delete this post ?">
            <li className={styles.item}>
              <Button variant={{ warning: true }}>
                <Icon name="TrashIcon" />
                Delete
              </Button>
            </li>
          </Dialog>
        </ul>
      </Content>
    </Root>
  );
}
