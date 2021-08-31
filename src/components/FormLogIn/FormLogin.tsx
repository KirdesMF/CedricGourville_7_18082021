import { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from '../../context/auth.context';
import { formLogInStyle } from './form-login.css';

const initialState = {
  email: '',
  password: '',
};

export function FormLogIn() {
  const [inputsUser, setInputsUser] = useState(initialState);
  const { login, error } = useAuth();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login(inputsUser);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputsUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <form className={formLogInStyle.form} onSubmit={handleOnSubmit}>
      {error && <p>{error.error}</p>}
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
        autoComplete="on"
        placeholder="password"
      />
      <button>Submit</button>
    </form>
  );
}
