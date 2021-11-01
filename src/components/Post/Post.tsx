import { motion, Variants } from 'framer-motion';
import { Comment, Post as PostType, User } from 'p7_types';
import { useState } from 'react';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { FormComment } from '../forms/FormComment';
import { Icon } from '../Icon/Icon';
import * as styles from './post.css';

type PostProps = {
  delay: number;
  user: Pick<User, 'username'>;
  comments: Pick<Comment, 'content'>[];
} & Pick<PostType, 'content' | 'id' | 'title' | 'media'>;

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
    id,
    title,
    content,
    media,
    delay,
    user: { username },
    comments,
  } = props;

  const [isCommenting, setIsCommenting] = useState(false);

  const handleComment = () => setIsCommenting((prev) => !prev);

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
        <h2>{title}</h2>
        <p>{content}</p>
        <small>{username}</small>

        <Button onClick={handleComment}>
          <Icon name="ChatBubbleIcon" />
        </Button>

        {isCommenting && <FormComment postId={id} />}
      </div>

      <Anchor to={`/feed?id=${id}`}>Details</Anchor>

      {comments.length !== 0 && (
        <div>
          {comments.map((com, idx) => (
            <p key={idx}>{com.content}</p>
          ))}
        </div>
      )}
    </motion.article>
  );
}
