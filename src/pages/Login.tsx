import { FormLogIn } from '../components/FormLogIn/FormLogin';
import { panel, wrapper } from '../styles/composition.css';

export function Login() {
  return (
    <section className={wrapper}>
      <div className={panel}>
        <FormLogIn />
      </div>
    </section>
  );
}
