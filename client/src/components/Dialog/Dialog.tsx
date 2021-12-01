import {
  Root,
  Trigger,
  Overlay,
  Content,
  Description,
  Close,
} from '@radix-ui/react-dialog';
import { ReactNode, useState } from 'react';
import { useUpdateUserDepartment } from '../../api/user.api';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import type { User, Department } from '@server/types';
import * as styles from './dialog.css';

type DialogProps = {
  children: ReactNode;
  description: string;
  action?: () => void;
};

export function Dialog({ children, description, action }: DialogProps) {
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
            <Button onClick={action} variant={{ primary: true }}>
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

type DialogDepartmentProps = {
  user: User;
} & DialogProps;

export function DialogDepartment({
  children,
  description,
  user,
}: DialogDepartmentProps) {
  const [department, setDepartment] = useState<Department>('VISITOR');
  const { mutate: updateDepartments } = useUpdateUserDepartment();
  const DEPARTMENTS: Department[] = [
    'VISITOR',
    'COM',
    'DIRECTION',
    'SOCIAL',
    'TECH',
  ];

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

          <div className={styles.wrapperRadio}>
            {DEPARTMENTS.map((department) => (
              <label key={department}>
                <input
                  type="radio"
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value as Department)}
                />
                {department}
              </label>
            ))}
          </div>

          <div className={styles.confirm}>
            <Button
              onClick={() => updateDepartments({ id: user.id, department })}
              variant={{ primary: true }}
            >
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
