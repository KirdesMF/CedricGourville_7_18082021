import { Data, User } from '../types';
const headers = new Headers({ 'Content-Type': 'application/json' });

async function register(payload: User): Promise<Data> {
  const res = await fetch(`http://localhost:1234/register`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
    credentials: 'include',
  });

  const json = await res.json();
  return json;
}

async function unRegister(id: string) {
  const res = await fetch(`http://localhost:1234/register/${id}`, {
    method: 'DELETE',
    headers,
  });

  return res;
}

export const RegisterAPI = {
  register,
  unRegister,
};
