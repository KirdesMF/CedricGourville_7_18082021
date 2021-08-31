import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthAPI } from '../../api/auth.api';
import { useAuth } from '../../context/auth.context';
import { formLogInStyle } from './form-login.css';

export function FormLogIn() {
  const [inputsUser, setInputsUser] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useAuth();
  const history = useHistory();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = inputsUser;
    await AuthAPI.login({ email, password }).then((res) => {
      res.user && setUser(res.user);
      history.push('/');
    });
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputsUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <form className={formLogInStyle.form} onSubmit={handleOnSubmit}>
      <input
        onChange={handleOnChange}
        id="email"
        name="email"
        type="text"
        placeholder="email"
      />
      <input
        onChange={handleOnChange}
        id="password"
        name="password"
        type="password"
        placeholder="password"
      />
      <button>Submit</button>
    </form>
  );
}
