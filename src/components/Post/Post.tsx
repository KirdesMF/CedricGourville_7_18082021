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
import { Modal } from '../Modal/Modal';
import { Paragraph } from '../Paragraph/Paragraph';
import { Popover } from '../Popover/Popover';
import { Span } from '../Span/Span';
import * as styles from './post.css';

function ButtonOptions({
  isAdminOrUserOwner,
  deletePost,
}: {
  isAdminOrUserOwner: boolean;
  deletePost: () => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = (isOpen: boolean) => setIsModalOpen(isOpen);

  const handleRemove = () => {
    deletePost();
    handleModal(false);
  };

  return (
    <>
      <Popover.Wrapper>
        <Popover.Trigger>
          <Button variant={{ discret: true }}>
            <Icon name="DotsVerticalIcon" />
          </Button>
        </Popover.Trigger>

        <Popover.Content>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Button
                onClick={() => handleModal(true)}
                variant={{ ghost: true }}
              >
                <Icon name="FlagIcon" />
                Report
              </Button>
            </li>
            {isAdminOrUserOwner && (
              <li className={styles.item}>
                <Button
                  onClick={() => handleModal(true)}
                  variant={{ warning: true }}
                >
                  <Icon name="TrashIcon" />
                  Delete
                </Button>
              </li>
            )}
          </ul>
        </Popover.Content>
      </Popover.Wrapper>

      <Modal isOpen={isModalOpen}>
        <div>
          <Button variant={{ secondary: true }} onClick={handleRemove}>
            Confirm
          </Button>
          <Button
            variant={{ primary: true }}
            onClick={() => handleModal(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </>
  );
}

type PostProps = {
  delay: number;
  post: TPost;
  currentUser: Pick<User, 'id' | 'role' | 'avatar' | 'department'>;
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
  const avatarsComment = comments.filter((_, i) => i < 5);
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
      className={styles.article}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={delay}
    >
      <header className={styles.header}>
        <Anchor className={styles.avatar} to={`/profil/${userId}`}>
          <Avatar user={{ avatar, department }} />
        </Anchor>

        <div className={styles.info}>
          <Anchor variant={{ color: 'base' }} to={`/profil/${userId}`}>
            <Span variant={{ weight: 'thin', size: 'sm' }}>{username}</Span>
          </Anchor>

          <Span variant={{ size: 'sm', color: 'primary' }}>
            {convertDate(createdAt)}
          </Span>
        </div>

        <ButtonOptions
          isAdminOrUserOwner={isAdminOrUserOwner}
          deletePost={handleDelete}
        />
      </header>

      <div className={styles.content}>
        <Heading as="h2" variant={{ fontSize: 'md', weight: 'semi-bold' }}>
          {title}
        </Heading>
        <Paragraph variant={{ size: 'sm' }}>{content}</Paragraph>

        {media && <img className={styles.img} src={media} alt="" />}
      </div>

      <div className={styles.interact}>
        <div className={styles.buttons}>
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
        </div>

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

      {lastComment && (
        <div className={styles.lastComment}>
          <Anchor
            className={styles.centered}
            to={`/profil/${lastComment.userId}`}
          >
            <Avatar variant={{ size: 'small' }} user={lastComment.user} />
          </Anchor>

          <Paragraph variant={{ size: 'sm' }}>
            <small>
              {convertDate(lastComment.createdAt)} -{' '}
              {convertDateToTime(lastComment.createdAt)} -{' '}
            </small>
            {lastComment.content}
          </Paragraph>
        </div>
      )}

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
