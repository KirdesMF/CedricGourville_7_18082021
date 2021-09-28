import { resetCSS } from './styles/reset';
import { AuthProvider } from './context/auth.context';
import { Routes } from './routes/Routes';
import { Header } from './modules/Header';
import { Flex } from './components/Flex';
import { Grid } from './components/Grid';

export default function App() {
  resetCSS();

  return (
    <AuthProvider>
      <Grid css={{ minHeight: '100vh', gridTemplateRows: 'min-content 1fr' }}>
        <Header />
        <Routes />
      </Grid>
    </AuthProvider>
  );
}
