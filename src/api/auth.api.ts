import { Data } from '../types';

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

  if (!res.ok) {
    throw await res.json();
  } else {
    return await res.json();
  }
}

async function logout(): Promise<Data> {
  const res = await fetch(`http://localhost:1234/auth/`, {
    method: 'DELETE',
    headers,
    credentials: 'include',
  });

  return await res.json();
}

async function checkUserLogged(): Promise<Data> {
  const res = await fetch(`http://localhost:1234/auth/`, {
    method: 'GET',
    headers,
    credentials: 'include',
  });

  if (!res.ok) {
    throw await res.json();
  } else {
    return await res.json();
  }
}

export const AuthAPI = {
  login,
  logout,
  checkUserLogged,
};
