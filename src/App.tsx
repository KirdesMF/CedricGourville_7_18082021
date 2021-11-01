import './styles/reset.css';

import { Header } from './components/Header/Header';
import { Routes } from './routes/Routes';
import { grid } from './styles/layouts.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { notifyOnChangeProps: 'tracked' },
  },
});

export const socket = io('http://localhost:1234', { withCredentials: true });

export default function App() {
  useEffect(() => {
    socket.on('connect', () =>
      console.log(`🔮 Socket client side connected id: ${socket.id}`)
    );

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.on('new-comment', (postId) => {
      alert('new comment');
      console.log(postId);
    });

    socket.on('new-post', () => {
      alert('new post');
    });
  }, [socket]);

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
