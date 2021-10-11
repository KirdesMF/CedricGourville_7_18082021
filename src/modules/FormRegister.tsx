import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../components/Input/Input';
import { useAuth } from '../context/auth.context';
import { utilities } from '../styles/utilities.css';
import { User } from '../types';

const inputs = [
  {
    name: 'firstName',
    type: 'text',
    id: 'firstName',
    placeholder: 'First Name',
  },
  { name: 'lastName', type: 'text', id: 'lastName', placeholder: 'Last Name' },
  { name: 'email', type: 'text', id: 'email', placeholder: 'Email' },
  { name: 'bio', type: 'text', id: 'bio', placeholder: 'Bio' },
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
    console.log(inputsUser);
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
      className={utilities({ display: 'grid', gap: 'sm' })}
    >
      {inputs.map((element) => (
        <Input
          onBlur={handleOnChange}
          key={element.id}
          id={element.id}
          type={element.type}
          placeholder={element.placeholder}
          autoComplete={element.autocomplete}
        />
      ))}
      <Input value="Send" type="submit" />
    </form>
  );
}
