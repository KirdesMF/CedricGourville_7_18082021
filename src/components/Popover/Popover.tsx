import {
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import * as styles from './popover.css';

type TPopoverContext = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const PopoverContext = createContext<TPopoverContext>({} as TPopoverContext);
const usePopover = () => useContext(PopoverContext);

function PopoverProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const values = { isOpen, setIsOpen };

  return (
    <PopoverContext.Provider value={values}>{children}</PopoverContext.Provider>
  );
}

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <PopoverProvider>
      <div className={styles.wrapper}>{children}</div>
    </PopoverProvider>
  );
}

type TriggerChildren = {
  onClick: () => void;
};

function Trigger({ children }: { children: ReactElement<TriggerChildren> }) {
  const { setIsOpen } = usePopover();
  const handleClick = () => setIsOpen((prev) => !prev);

  return <>{cloneElement(children, { onClick: handleClick })}</>;
}

function Content({ children }: { children: ReactNode }) {
  const { isOpen } = usePopover();

  if (!isOpen) return null;
  return <div className={styles.popover}>{children}</div>;
}

export const Popover = { Wrapper, Trigger, Content };
