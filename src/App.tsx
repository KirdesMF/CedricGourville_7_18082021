import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { AuthProvider } from './context/auth.context';
import { Routes } from './routes/Routes';
import './styles/global.css';

export default function App() {
  return (
    <AuthProvider>
      <Layout variant={{ full: true }}>
        <Header />
        <Routes />
      </Layout>
    </AuthProvider>
  );
}
