import './styles/reset.css';

import { Header } from './components/Header/Header';
import { Routes } from './routes/Routes';
import { grid } from './styles/layouts.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import { IKContext } from 'imagekitio-react';

const queryClient = new QueryClient({
  defaultOptions: { queries: { notifyOnChangeProps: 'tracked' } },
});

// const publicKey = 'public_LACBQ1l5yA/Ko4n7CaM23xA+ikg=';
// const urlEndpoint = 'https://ik.imagekit.io/i3uinwevzvu';
// const authenticationEndpoint = 'http://localhost:1234/imagekit';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={grid({ template: 'full' })}>
        <Header />
        <Routes />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
