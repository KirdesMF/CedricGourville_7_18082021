import { motion, Variants } from 'framer-motion';
import { Comment, Post as PostType, User } from 'p7_types';
import { useState } from 'react';
import { useDeletePost } from '../../api/post.api';
import { utilities } from '../../styles/utilities.css';
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
  user: Pick<User, 'username' | 'id' | 'role' | 'avatar' | 'department'>;
  comments: Pick<Comment, 'content'>[];
} & Pick<
  PostType,
  'content' | 'id' | 'title' | 'media' | 'userId' | 'createdAt'
>;

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: (delay: number) => ({
    opacity: 1,
    transition: {
      delay: delay * 0.1,
    },
  }),
  exit: {
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
    createdAt,
    user: { username, id: relationUserId, role, avatar, department },
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
    >
      <Anchor className={styles.avatar} to={`/profil/${relationUserId}`}>
        <Avatar src={avatar} department={department} />
      </Anchor>

      <div className={utilities({ flex: 1, display: 'grid', gap: 'md' })}>
        <div
          className={utilities({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <div
            className={utilities({
              display: 'flex',
              gap: 'sm',
              alignItems: 'center',
            })}
          >
            <Anchor
              variant={{ color: 'base' }}
              to={`/profil/${relationUserId}`}
            >
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

        <div
          className={utilities({
            display: 'flex',
            gap: 'sm',
            alignItems: 'center',
          })}
        >
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

        {isCommenting && <FormComment postId={postId} />}

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
