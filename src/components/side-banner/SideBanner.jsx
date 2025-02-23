import image from '../../assets/image.jpeg';
import thunderbolt from '../../assets/thunderbolt.png';
import styles from './SideBanner.module.css';

export default function SideBanner({ step }) {
  if (step === 1) {
    return (
      <div className={styles.container}>
        <img
          className={styles.image}
          src={image}
          alt='Imagen ilustrativa'
        />
        <div className={styles.iconOverlay}>
          <img
            className={styles.icon}
            src={thunderbolt}
            alt='Ícono de rayo'
          />
        </div>
      </div>
    );
  }

  return <div className={styles.topBar} />;
}
