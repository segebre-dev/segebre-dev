import clsx from 'clsx';
import { ExternalLink } from '../../components/external-link';
import { basePath } from '../../utils/constants';
import styles from './styles.module.css';

const Home = (): React.ReactElement => (
  <div className={styles.container}>
    <img src={`${basePath}/favicon.png`} alt="" className={styles.logo} />
    <h1 className={clsx(styles.text, styles.heading)}>
      Hello{' '}
      <span aria-hidden className={styles.icon}>
        👋
      </span>{' '}
      and welcome to segebre.dev!{' '}
      <span aria-hidden className={styles.icon}>
        🎉
      </span>{' '}
    </h1>
    <div className={clsx(styles.text, styles.content)}>
      Here, I try to post things that I learn{' '}
      <span aria-hidden className={styles.icon}>
        🤓
      </span>
      , you might find it useful{' '}
      <span aria-hidden className={styles.icon}>
        😃
      </span>
      , if so, please share it with others{' '}
      <span aria-hidden className={styles.icon}>
        🙌
      </span>
      . This site is open source{' '}
      <span aria-hidden className={styles.icon}>
        📖
      </span>{' '}
      so if you find any mistakes{' '}
      <span aria-hidden className={styles.icon}>
        ❌
      </span>
      , please feel free to open a pull request on GitHub and help avoid
      misinformation{' '}
      <span aria-hidden className={styles.icon}>
        💪
      </span>
      . Thank you in advance!
      <span aria-hidden className={styles.icon}>
        ❤️
      </span>
    </div>
    <div className={clsx(styles.text, styles.preview)}>
      {'--->'} First post is in the oven
      <span aria-hidden className={styles.icon}>
        🍞
      </span>{' '}
      and will be out soon
      <span aria-hidden className={styles.icon}>
        🙊
      </span>
      ! {'<---'}
    </div>
    <div className={clsx(styles.text, styles.preview)}>
      In the meantime, check out{' '}
      <ExternalLink
        href="https://foobar.agency/blog/software-engineering/An-analogy-of-JavaScript%E2%80%99s-single-threaded-asynchronicity"
        noA11yIcon
      >
        one of my previously written posts
      </ExternalLink>{' '}
      <span aria-hidden className={styles.icon}>
        ✌️
      </span>
    </div>
  </div>
);

export default Home;
