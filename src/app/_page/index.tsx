import ProfilePicture from './profile-picture';
import styles from './styles.module.css';

const Page = () => {
  return (
    <>
      <ProfilePicture />
      <h1 className={styles.heading}>
        <p>Juan Enrique</p>
        <p>Segebre Zaghmout</p>
      </h1>
      <div className={styles.content}>
        <p>Hello 👋 and welcome to segebre.dev! 🎉 </p>
        <p>
          Here, I try to post things that I learn 🤓, you might find it useful
          😃, if so, please share it with others 🙌.
        </p>
        <p>
          This site is open source 📖 so if you find any mistakes ❌, please
          feel free to open a pull request on GitHub and help avoid
          misinformation 💪. Thank you in advance!❤️
        </p>
      </div>
    </>
  );
};

export default Page;
