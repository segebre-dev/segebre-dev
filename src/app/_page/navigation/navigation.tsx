import Link from 'next/link';
import Badge from '@/components/badge';
import styles from './styles.module.css';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li>
        <Link href="/blog">
          <Badge clickable>Blog</Badge>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
