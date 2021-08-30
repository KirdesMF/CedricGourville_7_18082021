const API_URL = `http://localhost:1234/auth`;
const headers = new Headers({ 'Content-Type': 'application/json' });

async function login(email: string, password: string) {
  const data = { email, password };
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  });

  const json = await res.json();
  return json;
}

async function logout() {
  await fetch(API_URL, {
    method: 'POST',
    headers,
  }).then((res) => res.json());
}

export const AuthAPI = {
  login,
  logout,
};
