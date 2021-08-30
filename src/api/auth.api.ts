import { User } from '../types';

const headers = new Headers({ 'Content-Type': 'application/json' });

async function login(payload: { email: string; password: string }) {
  const res = await fetch(`http://localhost:1234/auth/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
  });

  const json = await res.json();
  return json;
}

async function logout(id: string) {
  await fetch(`http://localhost:1234/auth/${id}`, {
    method: 'POST',
    headers,
  }).then((res) => res.json());
}

async function checkUserLogged(): Promise<User> {
  const res = await fetch(`http://localhost:1234/auth/`);

  if (!res.ok) {
    return res.json().then((json) => {
      throw json;
    });
  }
  const json = await res.json();
  return json;
}

export const AuthAPI = {
  login,
  logout,
  checkUserLogged,
};
