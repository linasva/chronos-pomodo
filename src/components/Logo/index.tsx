import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.Logo}>
      <a href='#' className={styles.logoLink}>
        <TimerIcon className={styles.logoLink} />
        <span>CHRONOS</span>
      </a>
    </div>
  );
}
