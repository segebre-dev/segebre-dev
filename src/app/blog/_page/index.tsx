import Card from '@/components/card/card';
import PostMetadata from '@/components/post-metadata';
import styles from './styles.module.css';
import posts from './posts';
import { metadata } from './metadata';

const Blog = () => (
  <>
    <h1>Blog</h1>
    <ul aria-label="posts" className={styles.list}>
      {posts.map(({ title, date, lengthInMinutes }) => (
        <li key={title}>
          <Card className={styles.blogPost}>
            <div>{title}</div>
            <PostMetadata
              date={new Date(date)}
              lengthInMinutes={lengthInMinutes}
            />
          </Card>
        </li>
      ))}
    </ul>
  </>
);

export { metadata };
export default Blog;
