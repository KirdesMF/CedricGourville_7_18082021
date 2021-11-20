import { motion, Variants } from 'framer-motion';
import { User } from 'p7_types';
import { useState } from 'react';
import {
  useDeletePost,
  useLikePost,
  useRemoveLikePost,
} from '../../api/post.api';
import { TPost } from '../../types';
import { convertDate, convertDateToTime } from '../../utils/utils';
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
  const {
    id,
    userId,
    createdAt,
    content,
    media,
    title,
    user,
    comments,
    likes,
  } = post;
  const { username, avatar, department } = user;

  const [isCommenting, setIsCommenting] = useState(false);
  const { mutate: deletePost } = useDeletePost();
  const { mutate: like } = useLikePost();
  const { mutate: unlike } = useRemoveLikePost();

  const hasLiked = likes.find((e) => e.userId === currentUser.id);
  const hasCommented = comments.some((e) => e.userId === currentUser.id);
  const avatarsComment = comments.filter((e, i) => i < 5);
  const lastComment = comments[comments.length - 1];

  const isAdminOrUserOwner =
    userId === currentUser.id || currentUser.role === 'ADMIN';

  const handleComment = () => setIsCommenting((prev) => !prev);
  const handleDelete = () => deletePost({ id });
  const handleLike = () => {
    hasLiked
      ? unlike({ id: hasLiked.id })
      : like({ userId: currentUser.id, postId: id });
  };

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
          <div className={styles.avatars}>
            {avatarsComment.map((e) => (
              <Avatar
                className={styles.avatarComments}
                key={e.id}
                variant={{ size: 'small', radius: 'square' }}
                user={e.user}
              />
            ))}
          </div>

          <Button
            variant={hasCommented ? { liked: true } : { ghost: true }}
            onClick={handleComment}
          >
            <Icon name="ChatBubbleIcon" />
            <Span variant={{ size: 'xs', weight: 'thin' }}>
              {comments.length}
            </Span>
          </Button>

          <Button
            onClick={handleLike}
            variant={hasLiked ? { liked: true } : { ghost: true }}
          >
            <Icon name="HeartIcon" />
            <Span variant={{ size: 'xs', weight: 'thin' }}>{likes.length}</Span>
          </Button>

          {isAdminOrUserOwner && (
            <Button variant={{ warning: true }} onClick={handleDelete}>
              <Icon name="TrashIcon" />
            </Button>
          )}
        </div>

        {lastComment && (
          <div className={styles.lastComment}>
            <small>
              {convertDate(lastComment.createdAt)} -{' '}
              {convertDateToTime(lastComment.createdAt)} -{' '}
            </small>

            <Paragraph variant={{ size: 'sm' }}>
              {lastComment.content}
            </Paragraph>
          </div>
        )}

        {isCommenting && <FormComment postId={id} userId={currentUser.id} />}
      </div>
    </motion.article>
  );
}
