import Link from 'next/link';
import styleHelper from '@/styleHelper';
import styles from './styles.module.css';
import posts from './posts';
import { metadata } from './metadata';
import BlogPostCard from './blog-post-card';

const Blog = () => (
  <>
    <h1>Blog</h1>
    <ul aria-label="posts" className={styles.list}>
      {posts.map(({ title, date, lengthInMinutes, path }) => (
        <li key={title}>
          <Link href={`/blog/${path}`} className={styleHelper.unstyleLink}>
            <BlogPostCard
              title={title}
              date={date}
              lengthInMinutes={lengthInMinutes}
            />
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export { metadata };
export default Blog;
