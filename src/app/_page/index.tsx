import ProfilePicture from './profile-picture';
import Navigation from './navigation';
import styles from './styles.module.css';

const Page = () => {
  return (
    <>
      <ProfilePicture />
      <h1 className={styles.heading}>
        <p>Juan Enrique</p>
        <p>Segebre Zaghmout</p>
      </h1>
      <Navigation />
      <div className={styles.content}>
        <p>Hey there! 👋 Welcome to segebre.dev! 🎉</p>
        <p>
          I'm here to share my learning journey 🤓, and hopefully, you'll find
          it useful too 😃. If it strikes a chord with you, do spread the
          knowledge 🙌.
        </p>
        <p>
          This site is open source 📖, and I'm proud to say it's a personal pet
          project. It's ad-free because I don't make any money from it, nor do I
          intend to do so; I'm simply sharing what I'm interested in. If you
          happen to spot any errors ❌, don't hesitate to jump in with a pull
          request on GitHub. Let's work together to keep misinformation at bay
          💪. Thanks a ton in advance! ❤️
        </p>
      </div>
    </>
  );
};

export default Page;
