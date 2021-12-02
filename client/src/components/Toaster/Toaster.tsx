import { vars } from '@app/styles/vars.css';
import { Toaster as RootToaster } from 'react-hot-toast';

export function Toaster() {
  return (
    <RootToaster
      toastOptions={{
        style: {
          background: vars.colors.primary8,
          color: vars.colors.primary12,
        },
      }}
    />
  );
}
