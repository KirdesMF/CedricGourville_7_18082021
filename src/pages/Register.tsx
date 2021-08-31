import { FormRegister } from '../components/FormRegister/FormRegister';
import { wrapper } from '../styles/composition.css';

export function Register() {
  return (
    <section className={wrapper}>
      <FormRegister />
    </section>
  );
}
