import './global.css';
import NavigationBreadcrumbs from './navigation-breadcrumbs';
import Footer from './footer';
import styles from './styles.module.css';

const Layout = ({ children }: PageLayoutProps) => (
  <html lang="en" className={styles.html}>
    <body className={styles.body}>
      <NavigationBreadcrumbs />
      <main className={styles.content}>{children}</main>
      <Footer />
    </body>
  </html>
);

export { metadata, viewport } from './metadata';
export default Layout;
