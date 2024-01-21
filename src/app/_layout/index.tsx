import './global.css';
import Footer from './footer';
import styles from './styles.module.css';

const Layout = ({ children }: PageLayoutProps) => (
  <html lang="en" className={styles.html}>
    <body className={styles.body}>
      <main className={styles.content}>{children}</main>
      <Footer />
    </body>
  </html>
);

export { metadata, viewport } from './metadata';
export default Layout;
