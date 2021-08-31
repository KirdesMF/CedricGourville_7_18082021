import { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from '../../context/auth.context';
import { User } from '../../types';
import { formRegisterStyle } from './form-register.css';

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
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputsUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <form className={formRegisterStyle.form} onSubmit={handleOnSubmit}>
      {inputs.map((element) => (
        <input
          onChange={handleOnChange}
          key={element.id}
          type={element.type}
          placeholder={element.placeholder}
          autoComplete={element.autocomplete}
        />
      ))}
      <button>Submit</button>
    </form>
  );
}
