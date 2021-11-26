import { useParams } from 'react-router';

export function PagePost() {
  const { postId } = useParams();
  return <main>PagePost {postId}</main>;
}
