import './styles/reset.css';

import { Header } from './components/Header/Header';
import { QueryClient, QueryClientProvider } from 'react-query';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { Doodle } from './components/Doodle/Doodle';
import { AppRouter } from './routes/router';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { notifyOnChangeProps: 'tracked' },
  },
});

// TODO
// sockets hooks ? context ?
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
      <Doodle />
      <Header />
      <AppRouter />
      <Footer />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
