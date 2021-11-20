import { motion, Variants } from 'framer-motion';
import { Comment, Post as PostType, Role, User } from 'p7_types';
import { useState } from 'react';
import { useDeletePost } from '../../api/post.api';
import { TPost } from '../../types';
import { convertDate } from '../../utils/utils';
import { Anchor } from '../Anchor/Anchor';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { FormComment } from '../forms/FormComment';
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';
import { Paragraph } from '../Paragraph/Paragraph';
import { Span } from '../Span/Span';
import * as styles from './post.css';

type PostProps = {
  delay: number;
  post: TPost;
  currentUser: Pick<User, 'id' | 'role'>;
};

const variants: Variants = {
  initial: { opacity: 0 },
  animate: (delay: number) => ({
    opacity: 1,
    transition: {
      delay: delay * 0.1,
    },
  }),
  exit: { opacity: 0 },
};

export function Post(props: PostProps) {
  const { delay, currentUser, post } = props;
  const { id, userId, createdAt, content, media, title, user, comments } = post;
  const { username, avatar, department } = user;

  const [isCommenting, setIsCommenting] = useState(false);
  const { mutate } = useDeletePost();

  const handleComment = () => setIsCommenting((prev) => !prev);
  const handleDelete = () => {
    mutate({ id });
  };
  const isAdminOrUser =
    userId === currentUser.id || currentUser.role === 'ADMIN';

  return (
    <motion.article
      className={styles.post}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={delay}
    >
      <Anchor className={styles.avatar} to={`/profil/${userId}`}>
        <Avatar user={{ avatar, department }} />
      </Anchor>

      <div className={styles.right}>
        <div className={styles.innerRight}>
          <div className={styles.info}>
            <Anchor variant={{ color: 'base' }} to={`/profil/${userId}`}>
              <Span variant={{ weight: 'thin', size: 'sm' }}>{username}</Span>
            </Anchor>

            <Span variant={{ size: 'sm', color: 'primary' }}>
              {convertDate(createdAt)}
            </Span>
          </div>

          <Button variant={{ ghost: true }}>
            <Icon name="DotsVerticalIcon" />
          </Button>
        </div>

        <div>
          <Heading variant={{ fontSize: 'md', weight: 'semi-bold' }} as="h2">
            {title}
          </Heading>
          <Paragraph variant={{ size: 'sm' }}>{content}</Paragraph>
        </div>

        {media && (
          <span className={styles.figure}>
            <img className={styles.img} src={media} alt="" />
          </span>
        )}

        <div className={styles.buttons}>
          <Button variant={{ ghost: true }} onClick={handleComment}>
            <Icon name="ChatBubbleIcon" />
            <Span variant={{ size: 'xs', weight: 'thin' }}>
              {comments.length}
            </Span>
          </Button>

          {isAdminOrUser && (
            <Button variant={{ warning: true }} onClick={handleDelete}>
              <Icon name="TrashIcon" />
            </Button>
          )}
        </div>

        {isCommenting && <FormComment postId={id} />}

        {/* <div>
          {comments.length !== 0 && (
            <div>
              {comments.map((com, idx) => (
                <p key={idx}>{com.content}</p>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </motion.article>
  );
}
