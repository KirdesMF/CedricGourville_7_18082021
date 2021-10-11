import { FocusEvent, FormEvent, useState } from 'react';
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

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
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

      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        required
        onBlur={handleOnBlur}
      />
      <Input
        id="paswword"
        type="password"
        placeholder="Enter your password"
        required
        onBlur={handleOnBlur}
        autoComplete="username"
      />

      <Input value="Send" type="submit" />
    </form>
  );
}
