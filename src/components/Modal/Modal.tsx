import {
  cloneElement,
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import * as styles from './modal.css';

function setAriaHidden(isOpen: boolean) {
  const root = document.querySelector('#root');
  isOpen
    ? root?.setAttribute('aria-hidden', 'true')
    : root?.setAttribute('aria-hidden', 'false');
}

// type TModalContext = {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// };

// const ModalContext = createContext<TModalContext>({} as TModalContext);
// const useModal = () => useContext(ModalContext);

// function ModalProvider({ children }: { children: ReactNode }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const values = { isOpen, setIsOpen };

//   return (
//     <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
//   );
// }

// function Wrapper({ children }: { children: ReactNode }) {
//   const { isOpen } = useModal();

//   useEffect(() => {
//     setAriaHidden(isOpen);
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <ModalProvider>
//       {ReactDOM.createPortal(
//         <aside className={styles.modal}>{children}</aside>,
//         document.body
//       )}
//     </ModalProvider>
//   );
// }

// type TriggerChildren = {
//   onClick: () => void;
// };

// function Trigger({ children }: { children: ReactElement<TriggerChildren> }) {
//   const { setIsOpen } = useModal();
//   const handleClick = () => setIsOpen(true);

//   return <>{cloneElement(children, { onClick: handleClick })}</>;
// }

// function Close({ children }: { children: ReactElement<TriggerChildren> }) {
//   const { setIsOpen } = useModal();
//   const handleClick = () => setIsOpen(false);

//   return <>{cloneElement(children, { onClick: handleClick })}</>;
// }

// function Content({ children }: { children: ReactNode }) {
//   return <div>{children}</div>;
// }

// export const Modal = { Wrapper, Trigger, Close, Content };

export function Modal({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  useEffect(() => {
    setAriaHidden(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <aside className={styles.modal}>{children}</aside>,
    document.body
  );
}
