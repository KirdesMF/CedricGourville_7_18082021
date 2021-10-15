import { Data, User } from '../types';
const headers = new Headers({ 'Content-Type': 'application/json' });

async function register(payload: User): Promise<Data> {
  const res = await fetch(`http://localhost:1234/register`, {
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

async function unRegister(id: string) {
  const res = await fetch(`http://localhost:1234/register/${id}`, {
    method: 'DELETE',
    headers,
  });

  return res;
}

async function checkUniqueValue(value: 'username' | 'email', payload: string) {
  const key = value === 'username' ? 'userName' : 'email';

  const res = await fetch(`http://localhost:1234/register/check`, {
    method: 'POST',
    body: JSON.stringify({ [key]: payload }),
    credentials: 'include',
    headers,
  });

  if (!res.ok) {
    throw await res.json();
  } else {
    return res;
  }
}

export const RegisterAPI = {
  register,
  unRegister,
  checkUniqueValue,
};
