import './global.css';
import Footer from './footer';
import styles from './styles.module.css';

const Layout = ({ children }: PageLayoutProps) => (
  <html lang="en" className={styles.html}>
    <body className={styles.body}>
      <div className={styles.content}>{children}</div>
      <Footer />
    </body>
  </html>
);

export { metadata, viewport } from './metadata';
export default Layout;
