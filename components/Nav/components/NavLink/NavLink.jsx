import Link from "next/link";
import { NavLinkContainer, NavLinkItem, NavLinkTitle } from "./NavLink.styles";

const NavLink = ({ href, title, children }) => {
  if (title)
    return (
      <NavLinkContainer>
        <Link href={href}>
          <NavLinkTitle>{children}</NavLinkTitle>
        </Link>
      </NavLinkContainer>
    );

  return (
    <NavLinkContainer>
      <Link href={href}>
        <NavLinkItem>{children}</NavLinkItem>
      </Link>
    </NavLinkContainer>
  );
};

export default NavLink;
