import {
  Root,
  Trigger,
  Overlay,
  Content,
  Description,
  Close,
} from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import * as styles from './dialog.css';

type DialogProps = {
  children: ReactNode;
  description: string;
  handleDeletePost?: () => void;
};

export function Dialog({
  children,
  description,
  handleDeletePost,
}: DialogProps) {
  return (
    <Root>
      <Overlay className={styles.overlay} />
      <Trigger asChild>{children}</Trigger>
      <Content className={styles.wrapper}>
        <div className={styles.content}>
          <Description>{description}</Description>
          <Close asChild>
            <Button className={styles.close} variant={{ ghost: true }}>
              <Icon name="Cross2Icon" />
            </Button>
          </Close>

          <div className={styles.confirm}>
            <Button onClick={handleDeletePost} variant={{ primary: true }}>
              Confirm
            </Button>
            <Close asChild>
              <Button variant={{ secondary: true }}>Cancel</Button>
            </Close>
          </div>
        </div>
      </Content>
    </Root>
  );
}
