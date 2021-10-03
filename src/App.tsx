import { Header } from './components/Header/Header';
import { AuthProvider } from './context/auth.context';
import { Routes } from './routes/Routes';
import './styles/global.css';

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes />
    </AuthProvider>
  );
}
