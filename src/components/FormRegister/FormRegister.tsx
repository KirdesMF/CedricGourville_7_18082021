import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterAPI } from '../../api/register.api';
import { useAuth } from '../../context/auth.context';
import { User } from '../../types';
import { formRegisterStyle } from './form-register.css';

export function FormRegister() {
  const [inputsUser, setInputsUser] = useState<User>({} as User);
  const { setUser } = useAuth();
  const history = useHistory();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await RegisterAPI.register(inputsUser).then((res) => {
      setUser(res);
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
    <form className={formRegisterStyle.form} onSubmit={handleOnSubmit}>
      <input
        onChange={handleOnChange}
        type="text"
        name="firstName"
        id="firstName"
        placeholder="firstName"
      />
      <input
        onChange={handleOnChange}
        type="text"
        name="lastName"
        id="lastName"
        placeholder="lastName"
      />
      <input
        onChange={handleOnChange}
        type="text"
        name="email"
        id="email"
        placeholder="email"
      />
      <input
        onChange={handleOnChange}
        type="text"
        name="password"
        id="password"
        placeholder="password"
        autoComplete="current-password"
      />
      <input
        onChange={handleOnChange}
        type="text"
        name="bio"
        id="bio"
        placeholder="bio"
      />
      <button>Submit</button>
    </form>
  );
}
