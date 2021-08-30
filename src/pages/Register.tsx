import { ChangeEvent, useState } from 'react';

async function createUserTest(user: Record<string, string>) {
  try {
    const res = await fetch('http://localhost:1234/register/', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
    const json = await res.json();

    if (json.error) {
      throw new Error(json.error);
    }

    return json;
  } catch (err) {
    console.log(err);
  }
}

export function Register() {
  const [user, setUser] = useState({});

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
        name="firstName"
        id="firstName"
        placeholder="firstName"
      />
      <input
        onChange={handleInput}
        type="text"
        name="lastName"
        id="lastName"
        placeholder="lastName"
      />
      <input
        onChange={handleInput}
        type="text"
        name="email"
        id="email"
        placeholder="email"
      />
      <input
        onChange={handleInput}
        type="text"
        name="password"
        id="password"
        placeholder="password"
      />
      <input
        onChange={handleInput}
        type="text"
        name="bio"
        id="bio"
        placeholder="bio"
      />
      <button onClick={() => createUserTest(user)}>Test</button>
    </section>
  );
}
