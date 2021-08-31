import { NavHeader } from '../components/NavHeader/NavHeader';
import { panel, wrapper } from '../styles/composition.css';

export function Header() {
  return (
    <header className={wrapper}>
      <div className={panel}>
        <NavHeader />
      </div>
    </header>
  );
}
