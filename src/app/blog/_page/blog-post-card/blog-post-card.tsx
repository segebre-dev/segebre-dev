import Card from '@/components/card';
import PostMetadata from '@/components/post-metadata';
import styles from './styles.module.css';
import type { BlogPostProps } from './types';

const BlogPostCard = ({ title, date, lengthInMinutes }: BlogPostProps) => (
  <Card className={styles.blogPost}>
    <div>{title}</div>
    <PostMetadata date={date} lengthInMinutes={lengthInMinutes} />
  </Card>
);

export default BlogPostCard;
