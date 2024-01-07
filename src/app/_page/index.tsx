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
    </>
  );
};

export default Page;
