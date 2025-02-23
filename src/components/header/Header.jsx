import logo from '../../assets/logo.png';
import cameraIcon from '../../assets/camera.svg';
import styles from './Header.module.css';

export default function Header({
  logoSrc = logo,
  title,
  icon = cameraIcon,
  enableIcon = false,
  centerHorizontally = false,
}) {
  return (
    <div className={`${styles.container} ${centerHorizontally ? styles.center : ''}`}>
      <img
        src={logoSrc}
        alt='logo'
        className={styles.logo}
      />
      {enableIcon && (
        <img
          src={icon}
          alt='icon'
          className={styles.icon}
        />
      )}
      <h1>{title}</h1>
    </div>
  );
}
