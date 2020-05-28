import {
  NavContainer,
  NavItem,
  NavLinks,
  NavGroup,
  NavTitle,
} from "./Nav.styles";
import { NavLink } from "./components";
import Link from "next/link";

const Nav = () => {
  return (
    <NavContainer>
      <NavGroup>
        <NavLink title={true} href="/">
          REACT DOCS
        </NavLink>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/author">Author</NavLink>
        </NavLinks>
      </NavGroup>
      <NavItem href="https://github.com/bengrunfeld/reactdocs">GitHub</NavItem>
    </NavContainer>
  );
};

export default Nav;
