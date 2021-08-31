import { Data, User } from '../types';

const headers = new Headers({ 'Content-Type': 'application/json' });

async function login(payload: {
  email: string;
  password: string;
}): Promise<Data> {
  const res = await fetch(`http://localhost:1234/auth/`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
    credentials: 'include',
  });

  const json = await res.json();
  return json;
}

async function logout(id: string): Promise<Data> {
  const res = await fetch(`http://localhost:1234/auth/${id}`, {
    method: 'POST',
    headers,
    credentials: 'include',
  });

  const json = res.json();
  return json;
}

async function checkUserLogged(): Promise<Data> {
  const res = await fetch(`http://localhost:1234/auth/`, {
    method: 'GET',
    headers,
    credentials: 'include',
  });

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
