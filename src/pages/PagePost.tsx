import { useParams } from 'react-router';

export function PagePost() {
  const { id } = useParams<Record<'id', string>>();
  return <main>PagePost {id}</main>;
}
