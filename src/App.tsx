import { Header } from './modules/Header';
import { AuthProvider } from './context/auth.context';
import { Routes } from './routes/Routes';
import './app.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes />
    </AuthProvider>
  );
}

export default App;
