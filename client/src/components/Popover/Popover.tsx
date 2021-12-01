import { Root, Trigger, Content } from '@radix-ui/react-popover';
import { Button } from '../Button/Button';
import { Dialog, DialogDepartment } from '../Dialog/Dialog';
import { Icon } from '../Icon/Icon';
import type { User } from '@server/types';
import * as styles from './popover.css';
import { useUnregisterUserByAdmin } from '../../api/user.api';

type PopoverProps = {
  isAdminOrUser?: boolean;
  deletePost?: () => void;
  updateDepartments?: () => void;
};
export function PopoverPost({ isAdminOrUser, deletePost }: PopoverProps) {
  return (
    <Root>
      <Trigger asChild>
        <Button variant={{ ghost: true }}>
          <Icon name="DotsVerticalIcon" variant={{ size: 'medium' }} />
        </Button>
      </Trigger>

      <Content asChild>
        <ul className={styles.list}>
          <Dialog description="Are you sure to report this post ?">
            <li className={styles.item}>
              <Button
                className={styles.button}
                variant={{ ghost: true, fullSize: true }}
              >
                <Icon name="FlagIcon" />
                Report
              </Button>
            </li>
          </Dialog>

          {isAdminOrUser && (
            <Dialog
              description="Are you sure to delete this post ?"
              action={deletePost}
            >
              <li className={styles.item}>
                <Button
                  className={styles.button}
                  variant={{ warning: true, fullSize: true }}
                >
                  <Icon name="TrashIcon" />
                  Delete
                </Button>
              </li>
            </Dialog>
          )}
        </ul>
      </Content>
    </Root>
  );
}

type PopoverAdminProps = {
  user: User;
};
export function PopoverAdmin({ user }: PopoverAdminProps) {
  const { mutate: deleteUser } = useUnregisterUserByAdmin();

  return (
    <Root>
      <Trigger asChild>
        <Button variant={{ ghost: true }}>
          <Icon name="DotsVerticalIcon" variant={{ size: 'medium' }} />
        </Button>
      </Trigger>

      <Content asChild>
        <ul className={styles.list}>
          <Dialog description="Are you sure to report this user ?">
            <li className={styles.item}>
              <Button
                className={styles.button}
                variant={{ ghost: true, fullSize: true }}
              >
                <Icon name="FlagIcon" />
                Report
              </Button>
            </li>
          </Dialog>

          <Dialog
            description="Are you sure to delete this user ?"
            action={() => deleteUser({ id: user.id })}
          >
            <li className={styles.item}>
              <Button
                className={styles.button}
                variant={{ warning: true, fullSize: true }}
              >
                <Icon name="TrashIcon" />
                Delete
              </Button>
            </li>
          </Dialog>

          <DialogDepartment
            description="Select the department you want to update"
            user={user}
          >
            <li className={styles.item}>
              <Button
                className={styles.button}
                variant={{ ghost: true, fullSize: true }}
              >
                <Icon name="GroupUsersIcon" />
                Set departement
              </Button>
            </li>
          </DialogDepartment>
        </ul>
      </Content>
    </Root>
  );
}
