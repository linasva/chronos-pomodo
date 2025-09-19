import { Container } from '../../../components/Container';

import { Footer } from '../../../components/Footer';
import { Menu } from '../../../components/Menu';
import { Logo } from '../../../components/Logo';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
