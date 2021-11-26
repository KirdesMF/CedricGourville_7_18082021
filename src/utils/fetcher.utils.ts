const HOST = `http://localhost:1234`;

const fetchOptions = {
  credentials: 'include',
  headers: new Headers({ 'Content-Type': 'application/json' }),
} as const;

async function fetcher<T>(req: RequestInfo): Promise<T> {
  const res = await fetch(req);
  const body = await res.json();

  if (!res.ok) throw body;

  return body;
}

async function get<T>(
  path: string,
  options: RequestInit = { method: 'GET', ...fetchOptions }
): Promise<T> {
  return await fetcher(new Request(`${HOST}/${path}`, options));
}

async function post<T>(
  path: string,
  body: unknown,
  options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(body),
    ...fetchOptions,
  }
): Promise<T> {
  return await fetcher(new Request(`${HOST}/${path}`, options));
}

async function postFormData<T>(
  path: string,
  body: unknown,
  options: RequestInit = {
    method: 'POST',
    body: body as BodyInit,
    credentials: 'include',
  }
) {
  return await fetcher<T>(new Request(`${HOST}/${path}`, options));
}

async function patchFormData<T>(
  path: string,
  body: unknown,
  options: RequestInit = {
    method: 'PATCH',
    body: body as BodyInit,
    credentials: 'include',
  }
): Promise<T> {
  return await fetcher(new Request(`${HOST}/${path}`, options));
}

async function patch<T>(
  path: string,
  body: unknown,
  options: RequestInit = {
    method: 'PATCH',
    body: JSON.stringify(body),
    ...fetchOptions,
  }
): Promise<T> {
  return await fetcher(new Request(`${HOST}/${path}`, options));
}

async function remove<T>(
  path: string,
  body: unknown,
  options: RequestInit = {
    method: 'DELETE',
    body: JSON.stringify(body),
    ...fetchOptions,
  }
): Promise<T> {
  return await fetcher(new Request(`${HOST}/${path}`, options));
}

export const Fetch = { get, post, patch, remove, postFormData, patchFormData };
