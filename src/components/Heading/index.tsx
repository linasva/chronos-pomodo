import styles from './styles.module.css'; // Quando vc usa o module vc pode criar uma variavel para puxar o css scope
type HeadingProps = {
  children: React.ReactNode;
};
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
