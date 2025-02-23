import styles from './Label.module.css';

export default function Label({ label, error = false }) {
  return <label className={error ? styles.error : styles.label}>{label}</label>;
}
