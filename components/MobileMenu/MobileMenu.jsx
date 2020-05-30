import { MobileMenuContainer } from "./MobileMenu.styles";
import { MenuLink } from "./components";

const MobileMenu = ({ isVisible }) => (
  <MobileMenuContainer isVisible={isVisible}>
    <MenuLink href="/">Home</MenuLink>
    <MenuLink href="/">Author</MenuLink>
    <MenuLink href="/">Github</MenuLink>
    <MenuLink href="/">Introduction</MenuLink>
    <MenuLink href="/">Getting Started</MenuLink>
    <MenuLink href="/">Installation</MenuLink>
  </MobileMenuContainer>
);

export default MobileMenu;
