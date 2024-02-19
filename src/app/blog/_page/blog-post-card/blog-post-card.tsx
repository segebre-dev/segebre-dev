import Card from '@/components/card';
import PostMetadata from '@/components/post-metadata';
import styles from './styles.module.css';
import type { BlogPostCardProps } from './types';

const BlogPostCard = ({ title, date, lengthInMinutes }: BlogPostCardProps) => (
  <Card className={styles.blogPost} clickable>
    <div>{title}</div>
    <PostMetadata date={date} lengthInMinutes={lengthInMinutes} />
  </Card>
);

export default BlogPostCard;
