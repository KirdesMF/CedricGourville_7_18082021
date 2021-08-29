import { ChangeEvent, useState } from 'react';
import { Input } from '../components/inputs/Input';

async function createUserTest(user: Record<string, string>) {
  const res = await fetch('http://localhost:1234/register/', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });

  const json = await res.json();
  return json;
}

export function Register() {
  const [user, setUser] = useState({ email: '', name: '' });

  // its just to test, really need improvements, app is rerendering each time
  // we type inside the input
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <section>
      <input
        onChange={handleInput}
        type="text"
        name="email"
        id="email"
        placeholder="email"
      />
      <Input />
      <input
        onChange={handleInput}
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <button onClick={() => createUserTest(user)}>Test</button>
    </section>
  );
}
