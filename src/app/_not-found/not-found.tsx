import Link from 'next/link';
import styles from './styles.module.css';

const NotFoundPage = () => (
  <>
    <h1 className={styles.heading}>Not found</h1>
    <p className={styles.message}>
      Oops! The page is playing hide and seek in cyberspace. 👾 I'm already on
      the case! 🧑‍🚀 <br />
      In the meantime, feel free to <Link href="/blog">explore the blog</Link>.
      🚀
    </p>
    <Link href="/" className={styles.goHomeLink}>
      Go home →
    </Link>
  </>
);

export default NotFoundPage;
