import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import {
  useDeletePost,
  useLikePost,
  useRemoveLikePost,
} from '../../api/post.api';
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

import type { User } from '@server/types';
import type { PostComment, TPost } from '../../types';
import { ToolTip } from '../Tooltip/Tooltip';
import { PopoverPost } from '../Popover/Popover';

type PostProps = {
  post: TPost;
  currentUser: Pick<User, 'id' | 'role' | 'avatar' | 'department'>;
  details?: boolean;
};

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
};

function Comments({ comment }: { comment: PostComment }) {
  return (
    <div className={styles.comment}>
      <Anchor className={styles.centered} to={`/users/${comment.userId}`}>
        <Avatar variant={{ size: 'small', ring: 2 }} user={comment.user} />
      </Anchor>

      <Paragraph variant={{ size: 'sm' }}>
        <small>
          {convertDate(comment.createdAt)} -{' '}
          {convertDateToTime(comment.createdAt)} -{' '}
        </small>
        {comment.content}
      </Paragraph>
    </div>
  );
}

export function Post(props: PostProps) {
  const { currentUser, post, details = false } = props;
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
  const avatarsComment = comments.filter((_, i) => i < 5);
  const lastComment = comments[comments.length - 1];

  const isAdminOrUserOwner =
    userId === currentUser.id || currentUser.role === 'ADMIN';
  const handleDeletePost = () => deletePost({ id });

  const handleComment = () => setIsCommenting((prev) => !prev);
  const handleLike = () => {
    hasLiked
      ? unlike({ id: hasLiked.id })
      : like({ userId: currentUser.id, postId: id });
  };

  const Content = ({ detail }: { detail: boolean }) => {
    if (detail) {
      return (
        <div className={styles.content}>
          <Heading as="h2" variant={{ fontSize: 'md', weight: 'semi-bold' }}>
            {title}
          </Heading>
          <Paragraph variant={{ size: 'sm' }}>{content}</Paragraph>

          {media && <img className={styles.img} src={media} alt="" />}

          {!details && <Anchor to={`${id}`}>More</Anchor>}
        </div>
      );
    }
    return (
      <Anchor to={`${id}`} className={styles.content}>
        <Heading as="h2" variant={{ fontSize: 'md', weight: 'semi-bold' }}>
          {title}
        </Heading>
        <Paragraph variant={{ size: 'sm' }}>{content}</Paragraph>

        {media && (
          <figure className={styles.figure}>
            <img
              className={styles.img}
              src={media}
              alt={`${title} - Alt text need to be improve`}
            />
          </figure>
        )}
      </Anchor>
    );
  };

  return (
    <motion.article
      className={styles.article}
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/** header */}
      <header className={styles.header}>
        <Anchor className={styles.avatar} to={`/users/${userId}`}>
          <Avatar variant={{ ring: 3 }} user={{ avatar, department }} />
        </Anchor>

        <div className={styles.info}>
          <Anchor variant={{ color: 'base' }} to={`/users/${userId}`}>
            <Span variant={{ weight: 'thin', size: 'sm' }}>{username}</Span>
          </Anchor>

          <Span variant={{ size: 'sm', color: 'primary' }}>
            {convertDate(createdAt)}
            {' - '}
            {convertDateToTime(createdAt)}
          </Span>
        </div>

        <PopoverPost
          isAdminOrUser={isAdminOrUserOwner}
          deletePost={handleDeletePost}
        />
      </header>

      {/** content */}
      <Content detail={details} />

      {/** buttons */}
      <div className={styles.interact}>
        <div className={styles.buttons}>
          <ToolTip content="comments">
            <Button
              variant={hasCommented ? { liked: true } : { ghost: true }}
              onClick={handleComment}
            >
              <Icon name="ChatBubbleIcon" />
              <Span variant={{ size: 'xs', weight: 'thin' }}>
                {comments.length}
              </Span>
            </Button>
          </ToolTip>

          <ToolTip content="likes">
            <Button
              onClick={handleLike}
              variant={hasLiked ? { liked: true } : { ghost: true }}
            >
              <Icon name="HeartIcon" />
              <Span variant={{ size: 'xs', weight: 'thin' }}>
                {likes.length}
              </Span>
            </Button>
          </ToolTip>
        </div>

        {/** comments avatar */}
        {avatarsComment && (
          <div className={styles.avatars}>
            {avatarsComment.map((e) => (
              <Avatar
                className={styles.avatarComments}
                key={e.id}
                variant={{ size: 'small', radius: 'full' }}
                user={e.user}
              />
            ))}
          </div>
        )}
      </div>

      {/** last comment */}
      {!details && lastComment ? (
        <div className={styles.wrapperComments}>
          <Comments comment={lastComment} />
        </div>
      ) : null}

      {details && comments ? (
        <div className={styles.wrapperComments}>
          {comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        </div>
      ) : null}

      {/** comment form */}
      {isCommenting && (
        <footer className={styles.form}>
          <Avatar
            className={styles.centered}
            variant={{ size: 'small' }}
            user={{
              avatar: currentUser.avatar,
              department: currentUser.department,
            }}
          />
          <FormComment postId={id} userId={currentUser.id} />
        </footer>
      )}
    </motion.article>
  );
}
