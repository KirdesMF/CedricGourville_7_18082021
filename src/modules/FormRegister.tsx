import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../components/Input/Input';
import { useAuth } from '../context/auth.context';
import { utilities } from '../styles/utilities.css';
import { User } from '../types';

const INPUTS = [
  {
    name: 'firstName',
    type: 'text',
    id: 'firstName',
    placeholder: 'First Name',
  },
  { name: 'lastName', type: 'text', id: 'lastName', placeholder: 'Last Name' },
  { name: 'email', type: 'email', id: 'email', placeholder: 'Email' },
  { name: 'bio', type: 'text', id: 'bio', placeholder: 'Your bio...' },
  {
    name: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'Password',
    autocomplete: 'on',
  },
];

export function FormRegister() {
  const [inputsUser, setInputsUser] = useState<User>({} as User);
  const { register } = useAuth();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    register(inputsUser);
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
      className={utilities({ display: 'grid', gap: 'sm', paddingBlock: 'sm' })}
    >
      {INPUTS.map((element) => (
        <Input
          onChange={handleOnChange}
          key={element.name}
          id={element.id}
          name={element.name}
          type={element.type}
          placeholder={element.placeholder}
          autoComplete={element.autocomplete}
          required
        />
      ))}
      <Input value="Send" type="submit" />
    </form>
  );
}
