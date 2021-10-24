import './styles/reset.css';

import { Header } from './components/Header/Header';
import { Routes } from './routes/Routes';
import { grid } from './styles/layouts.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './context/auth.context';

const queryClient = new QueryClient({
  defaultOptions: { queries: { notifyOnChangeProps: 'tracked' } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className={grid({ template: 'full' })}>
          <Header />
          <Routes />
        </div>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
