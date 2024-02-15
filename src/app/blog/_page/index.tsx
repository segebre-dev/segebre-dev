import styles from './styles.module.css';
import posts from './posts';
import { metadata } from './metadata';
import BlogPostCard from './blog-post-card';

const Blog = () => (
  <>
    <h1>Blog</h1>
    <ul aria-label="posts" className={styles.list}>
      {posts.map(({ title, date, lengthInMinutes }) => (
        <li key={title}>
          <BlogPostCard
            title={title}
            date={date}
            lengthInMinutes={lengthInMinutes}
          />
        </li>
      ))}
    </ul>
  </>
);

export { metadata };
export default Blog;
