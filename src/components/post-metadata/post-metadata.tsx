import clsx from 'clsx';
import Badge from '@/components/badge';
import ClockIcon from './clock.svg';
import styles from './styles.module.css';
import { PostMetadataProps } from './types';

const PostMetadata = ({
  date,
  lengthInMinutes,
  className,
}: PostMetadataProps) => {
  const formattedDate = Intl.DateTimeFormat('en-DE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
  const formattedLength = `${lengthInMinutes} min`;

  return (
    <div className={clsx(styles.container, className)}>
      <span className={styles.date}>{formattedDate}</span>
      <Badge>
        <ClockIcon className={styles.icon} />
        {formattedLength}
      </Badge>
    </div>
  );
};

export default PostMetadata;
