import styles from './styles.module.css'; // Quando vc usa o module vc pode criar uma variavel para puxar o css scope

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda com funciona a técnica pomodoro</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com coração{' '}
      </a>
    </footer>
  );
}
