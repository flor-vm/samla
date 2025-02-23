import styles from './ErrorHelper.module.css';

export default function ErrorHelper({ message }) {
  return <span className={styles.errorHelper}>{message}</span>;
}
