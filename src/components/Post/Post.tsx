import { motion, Variants } from 'framer-motion';
import { Comment, Post as PostType, User } from 'p7_types';
import { useState } from 'react';
import { useDeletePost } from '../../api/post.api';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { FormComment } from '../forms/FormComment';
import { Icon } from '../Icon/Icon';
import * as styles from './post.css';

type PostProps = {
  delay: number;
  user: Pick<User, 'username' | 'id' | 'role'>;
  comments: Pick<Comment, 'content'>[];
} & Pick<PostType, 'content' | 'id' | 'title' | 'media' | 'userId'>;

const variants: Variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: delay * 0.1,
    },
  }),
  exit: {
    y: 50,
    opacity: 0,
  },
};

export function Post(props: PostProps) {
  const {
    id: postId,
    title,
    content,
    media,
    delay,
    userId,
    user: { username, id: relationUserId, role },
    comments,
  } = props;

  const [isCommenting, setIsCommenting] = useState(false);
  const { mutate } = useDeletePost();

  const handleComment = () => setIsCommenting((prev) => !prev);
  const handleDelete = () => {
    mutate({ id: postId });
  };
  const isAdminOrUser = userId === relationUserId || role === 'ADMIN';

  return (
    <motion.article
      className={styles.post}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={delay}
      layout
    >
      {media && (
        <span className={styles.figure}>
          <img className={styles.img} src={media} alt="" />
        </span>
      )}

      <div className={styles.content}>
        <motion.h2 layout>Title: {title}</motion.h2>
        <motion.p layout>Content: {content}</motion.p>
        <small>Username: {username}</small>

        <Button onClick={handleComment}>
          <Icon name="ChatBubbleIcon" />
        </Button>

        {isCommenting && <FormComment postId={postId} />}
      </div>

      <Anchor to={`/feed?id=${postId}`}>Details</Anchor>

      {isAdminOrUser && <Button onClick={handleDelete}>Delete</Button>}

      <div>
        <h3>Comments</h3>
        {comments.length !== 0 && (
          <div>
            {comments.map((com, idx) => (
              <p key={idx}>{com.content}</p>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
