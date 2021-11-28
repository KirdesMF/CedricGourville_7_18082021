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
};

export function Dialog({ children, description }: DialogProps) {
  return (
    <Root>
      <Overlay className={styles.overlay} />
      <Trigger asChild>{children}</Trigger>
      <Content className={styles.content}>
        <div>
          <Description>{description}</Description>
          <Close asChild>
            <Button variant={{ ghost: true }}>
              <Icon name="Cross2Icon" />
            </Button>
          </Close>
        </div>
      </Content>
    </Root>
  );
}
