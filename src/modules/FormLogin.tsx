import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../components/Input/Input';
import { useAuth } from '../context/auth.context';
import { utilities } from '../styles/utilities.css';
import { cx } from '../utils/classname.utils';

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
    <form
      onSubmit={handleOnSubmit}
      className={cx([
        utilities({
          display: 'grid',
          gap: 'md',
          maxWidth: '50ch',
        }),
      ])}
    >
      {error && <p>{error.error}</p>}
      <input
        onChange={handleOnChange}
        id="email"
        name="email"
        type="text"
        placeholder="email"
        required
      />
      <Input />
      <input
        onChange={handleOnChange}
        id="password"
        name="password"
        type="password"
        autoComplete="on"
        placeholder="password"
        required
      />
      <button>Submit</button>
    </form>
  );
}
