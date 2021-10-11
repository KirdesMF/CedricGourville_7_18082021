import './styles/reset.css';

import { Header } from './components/Header/Header';
import { AuthProvider } from './context/auth.context';
import { Routes } from './routes/Routes';
import { grid } from './styles/layouts.css';

export default function App() {
  return (
    <AuthProvider>
      <div className={grid({ template: 'full' })}>
        <Header />
        <Routes />
      </div>
    </AuthProvider>
  );
}
