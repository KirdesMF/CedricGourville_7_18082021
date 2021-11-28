import { useState } from 'react';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import { srOnly } from '../../styles/helpers.css';
import * as styles from './button-options.css';
import { Modal } from '../Modal/Modal';

export function ButtonOptions({
  isAdminOrUserOwner,
  deletePost,
}: {
  isAdminOrUserOwner: boolean;
  deletePost: () => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = (isOpen: boolean) => setIsModalOpen(isOpen);

  const handleRemove = () => {
    deletePost();
    handleModal(false);
  };

  return (
    <>
      <Menu>
        <MenuButton className={styles.button}>
          <span className={srOnly}>option post button</span>
          <Icon name="DotsVerticalIcon" />
        </MenuButton>

        <MenuList portal className={styles.list}>
          <MenuItem onSelect={() => handleModal(true)} className={styles.item}>
            <Button variant={{ ghost: true }}>
              <Icon name="FlagIcon" />
              Report
            </Button>
          </MenuItem>
          {isAdminOrUserOwner && (
            <MenuItem
              onSelect={() => handleModal(true)}
              className={styles.item}
            >
              <Button variant={{ warning: true }}>
                <Icon name="TrashIcon" />
                Delete
              </Button>
            </MenuItem>
          )}
        </MenuList>
      </Menu>

      <Modal isOpen={isModalOpen}>
        <div>
          <Button variant={{ secondary: true }} onClick={handleRemove}>
            Confirm
          </Button>
          <Button
            variant={{ primary: true }}
            onClick={() => handleModal(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}
