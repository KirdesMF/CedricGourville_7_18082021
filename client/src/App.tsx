import './styles/reset.css';

import { Header } from './components/Header/Header';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { Doodle } from './components/Doodle/Doodle';
import { AppRouter } from './routes/router';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import toast from 'react-hot-toast';
import { Toaster } from './components/Toaster/Toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { notifyOnChangeProps: 'tracked' },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        if (error instanceof Error) {
          toast.error(error.message);
          console.log(query);
        }
      }
    },
  }),
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
      <HelmetProvider>
        <Doodle />
        <Header />
        <AppRouter />
        <Footer />
        <Toaster />
      </HelmetProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}
