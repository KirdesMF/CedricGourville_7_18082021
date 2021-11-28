import { Root, Trigger, Content } from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import * as styles from './tooltip.css';

type TooltipProps = {
  content: string;
  children: ReactNode;
};

export function ToolTip({ content, children }: TooltipProps) {
  return (
    <Root delayDuration={500}>
      <Trigger asChild>{children}</Trigger>
      <Content className={styles.content}>{content}</Content>
    </Root>
  );
}
