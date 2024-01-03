import './global.css';
import styles from './styles.module.css';
import type { LayoutProps } from './types';

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" className={styles.html}>
    <body className={styles.body}>
      <div className={styles.content}>{children}</div>
    </body>
  </html>
);

export default Layout;
