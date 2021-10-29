import { motion, Variants } from 'framer-motion';
import * as styles from './post.css';

type PostProps = {
  title: string;
  content: string;
  media: string | null;
  delay: number;
};

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
  const { title, content, media, delay } = props;
  return (
    <motion.article
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.post}
      custom={delay}
    >
      {media && <img className={styles.img} src={media} alt="" />}
      <h2>{title}</h2>
      <p>{content}</p>
    </motion.article>
  );
}
