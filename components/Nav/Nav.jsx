import {
  NavContainer,
  NavItem,
  NavLinks,
  NavGroup,
  NavTitle,
} from "./Nav.styles";
import { NavLink, Hamburger } from "./components";
import Link from "next/link";

const Nav = ({ toggleMenu }) => (
  <NavContainer>
    <NavGroup>
      <NavLink title={true} href="/">
        REACT DOCS
      </NavLink>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Author</NavLink>
        <NavItem href="https://github.com/bengrunfeld/reactdocs">
          GitHub
        </NavItem>
      </NavLinks>
    </NavGroup>
    <div onClick={toggleMenu}>
      <Hamburger />
    </div>
  </NavContainer>
);

export default Nav;
