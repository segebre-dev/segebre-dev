import Image from 'next/image';
import profilePictureSrc from './profile-picture.png';
import styles from './styles.module.css';

const ProfilePicture = () => (
  <Image
    src={profilePictureSrc}
    alt=""
    width={64}
    className={styles.profilePicture}
  />
);

export default ProfilePicture;
