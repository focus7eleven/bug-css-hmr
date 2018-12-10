import styles from './index.css';

export default function() {
  return (
    <div className={`${styles.normal} common-background`}>
      <h1>Page index</h1>
      <div className={styles.test}>123</div>
    </div>
  );
}
